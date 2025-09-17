from fastapi import APIRouter, Depends, HTTPException, UploadFile, File
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import google.generativeai as genai
import os
from dotenv import load_dotenv
from typing import Dict, List, Optional
import uuid
import shutil
from PIL import Image
import io

load_dotenv()

# Configure Gemini with API key
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

router = APIRouter(prefix="/chat", tags=["Chatbot"])

# ---------------- Models ----------------
class ChatRequest(BaseModel):
    message: str
    session_id: Optional[str] = None   # Track chat sessions


class ChatResponse(BaseModel):
    reply: str
    session_id: str


class BookmarkRequest(BaseModel):
    session_id: str
    role: str   # "user" or "bot"
    msg: str


class BookmarkResponse(BaseModel):
    id: str
    session_id: str
    role: str
    msg: str


# ---------------- Storage ----------------
chat_sessions: Dict[str, List[Dict]] = {}   # session_id -> messages
bookmarks: Dict[str, Dict] = {}  # bookmark_id -> bookmark_data


# ---------------- Routes ----------------
@router.post("/", response_model=ChatResponse)
async def chat_with_bot(data: ChatRequest):
    try:
        session_id = data.session_id or str(uuid.uuid4())
        model = genai.GenerativeModel("gemini-1.5-flash")

        # Generate bot response
        response = model.generate_content(data.message)
        reply = response.text if response and response.text else "⚠️ No reply from Gemini."

        # Save to history
        if session_id not in chat_sessions:
            chat_sessions[session_id] = []
        chat_sessions[session_id].append({"role": "user", "msg": data.message})
        chat_sessions[session_id].append({"role": "bot", "msg": reply})

        return {"reply": reply, "session_id": session_id}

    except Exception as e:
        return {"reply": f"⚠️ Error: {str(e)}", "session_id": data.session_id or ""}


@router.get("/history/{session_id}")
def get_history(session_id: str):
    """Get chat history for a session"""
    return {"history": chat_sessions.get(session_id, [])}


@router.post("/bookmark")
def bookmark_message(data: BookmarkRequest):
    """Bookmark a message"""
    bookmark_id = str(uuid.uuid4())
    bookmark_data = {
        "id": bookmark_id,
        "session_id": data.session_id,
        "role": data.role,
        "msg": data.msg
    }
    bookmarks[bookmark_id] = bookmark_data
    return {"msg": "✅ Bookmarked successfully", "bookmark_id": bookmark_id}


@router.get("/bookmarks")
def get_bookmarks():
    """Get all bookmarks"""
    return {"bookmarks": list(bookmarks.values())}


@router.delete("/bookmarks/{bookmark_id}")
def remove_bookmark(bookmark_id: str):
    """Remove a specific bookmark"""
    if bookmark_id in bookmarks:
        del bookmarks[bookmark_id]
        return {"msg": "✅ Bookmark removed successfully"}
    else:
        raise HTTPException(status_code=404, detail="Bookmark not found")


@router.delete("/history/{session_id}")
def clear_history(session_id: str):
    """Clear history for a specific session"""
    if session_id in chat_sessions:
        chat_sessions[session_id] = []
        return {"msg": "✅ History cleared successfully"}
    else:
        return {"msg": "⚠️ No history found for this session"}


@router.post("/upload-file")
async def upload_file(file: UploadFile = File(...)):
    """Handle file uploads"""
    try:
        # Create uploads directory if it doesn't exist
        os.makedirs("uploads", exist_ok=True)
        
        # Save file
        file_path = f"uploads/{file.filename}"
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        
        # Process file based on type
        file_info = {
            "filename": file.filename,
            "content_type": file.content_type,
            "size": os.path.getsize(file_path)
        }
        
        # You can add file processing logic here
        # For example, extract text from PDFs, process Excel files, etc.
        
        return {
            "msg": "✅ File uploaded successfully",
            "file_info": file_info
        }
        
    except Exception as e:
        return {"msg": f"⚠️ Error uploading file: {str(e)}"}


@router.post("/upload-image")
async def upload_image(file: UploadFile = File(...)):
    """Handle image uploads"""
    try:
        # Validate that it's an image
        if not file.content_type.startswith('image/'):
            raise HTTPException(status_code=400, detail="File must be an image")
        
        # Create uploads directory if it doesn't exist
        os.makedirs("uploads/images", exist_ok=True)
        
        # Save image
        image_path = f"uploads/images/{file.filename}"
        with open(image_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        
        # Get image info
        with Image.open(image_path) as img:
            image_info = {
                "filename": file.filename,
                "content_type": file.content_type,
                "size": os.path.getsize(image_path),
                "dimensions": img.size,
                "format": img.format
            }
        
        # You can add image processing logic here
        # For example, use Gemini Vision API to analyze the image
        
        return {
            "msg": "✅ Image uploaded successfully",
            "image_info": image_info
        }
        
    except Exception as e:
        return {"msg": f"⚠️ Error uploading image: {str(e)}"}


@router.post("/analyze-image")
async def analyze_image_with_gemini(file: UploadFile = File(...)):
    """Analyze image using Gemini Vision"""
    try:
        if not file.content_type.startswith('image/'):
            raise HTTPException(status_code=400, detail="File must be an image")
        
        # Read image data
        image_data = await file.read()
        
        # Use Gemini Vision to analyze image
        model = genai.GenerativeModel('gemini-1.5-flash')
        
        # Convert image data to PIL Image
        image = Image.open(io.BytesIO(image_data))
        
        # Analyze image
        response = model.generate_content([
            "Describe what you see in this image in detail.",
            image
        ])
        
        analysis = response.text if response and response.text else "⚠️ Could not analyze image."
        
        return {
            "msg": "✅ Image analyzed successfully",
            "analysis": analysis
        }
        
    except Exception as e:
        return {"msg": f"⚠️ Error analyzing image: {str(e)}"}
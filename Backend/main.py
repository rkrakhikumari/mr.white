from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import models
from database import engine
from routes import auth_routes
from routes import chat

# Create tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Mr. White Backend")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(auth_routes.router)
app.include_router(chat.router)


@app.get("/")
def root():
    return {"msg": "Mr. White API is running"}

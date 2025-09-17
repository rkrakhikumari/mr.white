import React, { useState, useEffect, useRef } from "react";
import {FaQuestionCircle,FaPaperclip,FaImage,FaMicrophone,FaBookmark,FaHistory,FaCrown,FaPlay,FaTimes,FaTrash,} from "react-icons/fa";

import mascot1 from "../assets/chat.png";
import mascot2 from "../assets/chat3.png";
import mascot3 from "../assets/chat4.png";
import mascot4 from "../assets/chat5.png";
import Navbar from "./landingPage/Navbar";
import Footer from "./landingPage/Footer";

export default function MrWhiteChat() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);
  const [history, setHistory] = useState([]);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  
  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);

  const images = [mascot1, mascot2, mascot3, mascot4];

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 500);
    return () => clearInterval(interval);
  }, [images.length]);

  // Load bookmarks on component mount
  useEffect(() => {
    loadBookmarks();
  }, []);

  // Send message
const sendMessage = async () => {
  if (!input.trim() || loading) return;

  const newMessage = { role: "user", text: input };
  setMessages((prev) => [...prev, newMessage]);
  setInput("");
  setLoading(true);

  try {
    const res = await fetch("http://127.0.0.1:8000/chat/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        message: newMessage.text,
        session_id: sessionId 
      }),
    });

    const data = await res.json();

    if (data.reply) {
      setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    }

    // Always update sessionId if one is returned
    if (data.session_id) {
      setSessionId(data.session_id);
      loadHistory(data.session_id);
    }

  } catch (error) {
    setMessages((prev) => [
      ...prev,
      { role: "bot", text: "⚠️ Server error. Please try again." },
    ]);
  } finally {
    setLoading(false);
  }
};

  // Load history from backend
  const loadHistory = async (session_id) => {
    if (!session_id) return;
    try {
      const res = await fetch(`http://127.0.0.1:8000/chat/history/${session_id}`);
      const data = await res.json();
      setHistory(data.history || []);
    } catch (error) {
      console.error("Failed to load history:", error);
    }
  };

  // Load bookmarks from backend
  const loadBookmarks = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/chat/bookmarks");
      const data = await res.json();
      setBookmarks(data.bookmarks || []);
    } catch (error) {
      console.error("Failed to load bookmarks:", error);
    }
  };

  // Bookmark a message
  const addBookmark = async (msg, role = "user") => {
    if (!sessionId) return;
    
    try {
      await fetch("http://127.0.0.1:8000/chat/bookmark", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_id: sessionId,
          role: role,
          msg: msg
        }),
      });
      
      // Reload bookmarks
      loadBookmarks();
    } catch (error) {
      console.error("Failed to bookmark message:", error);
    }
  };

  const removeBookmark = (index) => {
    setBookmarks(bookmarks.filter((_, i) => i !== index));
  };

  const clearHistory = () => {
    setHistory([]);
  };

  // Handle file attachment
  const handleFileAttach = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // You can process the file here
      console.log("File selected:", file.name);
      // Add file processing logic here
    }
  };

  // Handle image upload
  const handleImageUpload = () => {
    imageInputRef.current?.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // You can process the image here
      console.log("Image selected:", file.name);
      // Add image processing logic here
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

return (
  <>
    <div className="min-h-screen bg-[#000000] text-white font-sans">
      <Navbar />

      {/* Image Slideshow */}
      <img
        src={images[currentIndex]}
        alt="Slideshow"
        className="w-full h-auto object-cover transition duration-500"
      />

      {/* Top Buttons */}
      <div className="flex justify-between items-center px-6 pl-28 pr-28 mt-10" data-aos="fade-down">
        <button className="flex text-xl items-center gap-2 bg-[#1a1a1a] px-3 py-1 hover:bg-[#2a2a2a] cursor-pointer">
          <FaQuestionCircle />
          How does it work?
        </button>
        <div className="flex gap-4">
          <button
            onClick={() => setShowBookmarks(!showBookmarks)}
            className="flex text-xl items-center gap-1 hover:text-[#D3B86A] cursor-pointer"
          >
            <FaBookmark />
            Bookmarks
          </button>
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="flex text-xl items-center gap-1 hover:text-[#D3B86A] cursor-pointer"
          >
            <FaHistory />
            History
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="mt-10 px-6 pb-32 relative">
        <div className="bg-[#111111] p-6 max-w-7xl mx-auto relative">
          {/* Bookmarks Panel */}
          {showBookmarks && (
            <div className="absolute -top-29 -right-30 w-100 h-213 bg-[#111] border border-gray-700 shadow-lg p-6 overflow-y-auto z-50 rounded-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Bookmarks</h2>
                <button onClick={() => setShowBookmarks(false)} className="hover:text-red-400">
                  <FaTimes />
                </button>
              </div>
              {bookmarks.length === 0 ? (
                <p className="text-gray-400">No bookmarks yet.</p>
              ) : (
                <div className="space-y-3">
                  {bookmarks.map((bookmark, i) => (
                    <div key={i} className="bg-[#1F1F1F] p-3 rounded-md border-l-4 border-[#D3B86A]">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="text-sm text-[#D3B86A] capitalize mb-1">
                            {bookmark.role}
                          </div>
                          <span className="text-gray-200 text-sm leading-relaxed">
                            {bookmark.msg}
                          </span>
                        </div>
                        <button
                          onClick={() => removeBookmark(i)}
                          className="text-red-400 hover:text-red-300 ml-2"
                        >
                          <FaTimes />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* History Panel */}
          {showHistory && (
            <div className="absolute -top-29 -right-30 w-100 h-213 bg-[#111] border border-gray-700 shadow-lg p-6 overflow-y-auto z-50 rounded-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">History</h2>
                <div className="flex gap-2">
                  <button
                    onClick={clearHistory}
                    className="text-sm flex items-center gap-1 text-red-400 hover:text-red-300"
                  >
                    <FaTrash /> Clear
                  </button>
                  <button onClick={() => setShowHistory(false)} className="hover:text-red-400">
                    <FaTimes />
                  </button>
                </div>
              </div>
              {history.length === 0 ? (
                <p className="text-gray-400">No history yet.</p>
              ) : (
                <div className="space-y-3">
                  {history.map((h, i) => (
                    <div key={i} className="bg-[#1F1F1F] p-3 rounded-md border-l-4 border-gray-600">
                      <div className="text-sm text-[#D3B86A] capitalize mb-1">{h.role}:</div>
                      <div className="text-gray-200 text-sm leading-relaxed">{h.msg}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Chat Section */}
          <h2 className="text-3xl font-semibold mb-10 text-center">
            How can Mr. White help you?
          </h2>

          <div className="bg-[#1F1F1F] p-6 rounded-md">
            {/* Chat messages */}
            <div className="h-64 overflow-y-auto mb-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-lg max-w-xl flex justify-between items-center gap-3 ${
                    msg.role === "user"
                      ? "bg-[#D3B86A] text-black ml-auto"
                      : "bg-[#333333] text-white"
                  }`}
                >
                  <span className="flex-1">{msg.text}</span>
                  <button
                    onClick={() => addBookmark(msg.text, msg.role)}
                    className="text-yellow-400 hover:text-yellow-200 ml-2"
                  >
                    <FaBookmark />
                  </button>
                </div>
              ))}
              {loading && <div className="text-gray-400 italic">Mr. White is typing...</div>}
            </div>

            {/* Input area */}
            <textarea
              rows="3"
              className="w-full text-xl bg-transparent resize-none outline-none placeholder-gray-400 border border-gray-600 p-2 rounded-md"
              placeholder="Write your message here."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            ></textarea>

            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-4 flex-wrap">
                <span className="flex items-center gap-2 bg-[#4D4D4D] border border-[#D3B86A] px-3 py-1 rounded-md text-xl">
                  <FaCrown />
                  Free Plan
                </span>
                <button
                  onClick={handleFileAttach}
                  className="flex items-center gap-2 hover:text-[#D3B86A] text-xl cursor-pointer"
                >
                  <FaPaperclip />
                  Attach File
                </button>
                <button
                  onClick={handleImageUpload}
                  className="flex items-center gap-2 hover:text-[#D3B86A] text-xl cursor-pointer"
                >
                  <FaImage />
                  Upload Image
                </button>
                <button className="flex items-center gap-2 hover:text-[#D3B86A] text-xl cursor-pointer">
                  <FaMicrophone />
                  Voice Message
                </button>
                <button
                  onClick={() => addBookmark(input, "user")}
                  className="flex items-center gap-2 hover:text-[#D3B86A] text-xl cursor-pointer"
                  disabled={!input.trim()}
                >
                  <FaBookmark />
                  Bookmark
                </button>
              </div>

              {/* Send Button */}
              <button
                onClick={sendMessage}
                className="bg-[#D3B86A] text-black p-3 rounded-md cursor-pointer hover:bg-[#C4A659] transition-colors"
                disabled={loading || !input.trim()}
              >
                <FaPlay />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden file inputs */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
        accept=".pdf,.doc,.docx,.txt,.csv"
      />
      <input
        type="file"
        ref={imageInputRef}
        onChange={handleImageChange}
        style={{ display: "none" }}
        accept="image/*"
      />
    </div>
    <Footer />
  </>
);
}

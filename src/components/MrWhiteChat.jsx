import React, { useState, useEffect } from "react";
import {
  FaQuestionCircle,
  FaPaperclip,
  FaImage,
  FaMicrophone,
  FaBookmark,
  FaHistory,
  FaCrown,
  FaPlay,
} from "react-icons/fa";

import mascot1 from "../assets/chat.png";
import mascot2 from "../assets/chat3.png";
import mascot3 from "../assets/chat4.png";
import mascot4 from "../assets/chat5.png";
import Navbar from "./landingPage/Navbar";
import Footer from "./landingPage/Footer";

export default function MrWhiteChat() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [mascot1, mascot2, mascot3, mascot4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 500); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="min-h-screen bg-[#000000] text-white font-sans pb-30">
        <Navbar />

        <img
          src={images[currentIndex]}
          alt="Slideshow"
          className="w-full h-auto object-cover transition duration-500"
        />

        <div className="flex justify-between items-center px-30 mt-10" data-aos="fade-down">
          <button className="flex text-xl items-center gap-2 bg-[#1a1a1a] px-3 py-1 hover:bg-[#2a2a2a] cursor-pointer" data-aos="fade-down">
            <FaQuestionCircle />
            How does it work?
          </button>
          <div className="flex gap-4">
            <button className="flex text-xl items-center gap-1 hover:text-[#D3B86A] cursor-pointer" data-aos="fade-down">
              <FaBookmark />
              Bookmarks
            </button>
            <button className="flex text-xl items-center gap-1 hover:text-[#D3B86A] cursor-pointer" data-aos="fade-down">
              <FaHistory />
              History
            </button>
          </div>
        </div>

        <div className="mt-10 px-6">
          <div className="bg-[#111111] p-6 max-w-7xl mx-auto" data-aos="fade-down">
            <h2 className="text-3xl font-semibold mb-10 text-center" data-aos="fade-down">
              How can Mr. White help you?
            </h2>

            <div className="bg-[#1F1F1F] pl-10 pt-10 pr-10">
              <textarea
                rows="4"
                className="w-full text-xl bg-transparent resize-none outline-none placeholder-gray-400"
                placeholder="Write your message here."
                data-aos="fade-down"
              ></textarea>

              <div className="flex justify-end items-center text-md text-white mr-5 mt-2" data-aos="fade-down">
                <span>00/10,000</span>
              </div>

              <div className="flex justify-between items-center flex-wrap gap-4 pt-4 mt-4 border-t border-gray-600" data-aos="fade-down" />

              <div className="flex text-xl flex-wrap items-center justify-between mt-6 gap-4">
                <div className="flex gap-20 flex-wrap pb-10">
                  <span className="flex items-center gap-2 bg-[#4D4D4D] border border-[#D3B86A] px-3 py-1 rounded-md text-xl" data-aos="fade-down">
                    <FaCrown />
                    Free Plan
                  </span>
                  <button className="flex items-center gap-2 hover:text-[#D3B86A] text-xl cursor-pointer" data-aos="fade-down">
                    <FaPaperclip />
                    Attach File
                  </button>
                  <button className="flex items-center gap-2 hover:text-[#D3B86A] text-xl cursor-pointer" data-aos="fade-down">
                    <FaImage />
                    Upload Image
                  </button>
                  <button className="flex items-center gap-2 hover:text-[#D3B86A] text-xl cursor-pointer" data-aos="fade-down">
                    <FaMicrophone />
                    Voice Message
                  </button>
                  <button className="flex items-center gap-2 hover:text-[#D3B86A] text-xl cursor-pointer" data-aos="fade-down">
                    <FaBookmark />
                    Bookmark
                  </button>
                </div>

                <button className="bg-[#D3B86A] text-black p-3 mb-10 rounded-md cursor-pointer" data-aos="fade-down">
                  <FaPlay />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

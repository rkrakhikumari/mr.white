import React from "react";
import { FaStar, FaRegStar, FaArrowLeft, FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/quest.png"
import Navbar from "./landingPage/Navbar";
import star from "../assets/star.png"
import john from "../assets/john.png"
import blstar from "../assets/blc_star.png"
import { IoChatbubble } from "react-icons/io5";
import Footer from "./landingPage/Footer";


export default function Questbook() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Header */}
      <Navbar/>
      
      {/* Hero */}
      <div className="w-full relative">
        <img
          src={logo}
          alt="Questbook Banner"
          className="w-full"
        />
        
      </div>

      {/* Content */}
      <div className="max-w-8xl mx-auto px-6 md:px-10 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">        {/* Left Column */}
      <div className="space-y-8 md:col-span-1">
          {/* Rating Summary */}
          <div className="bg-[#1C1C1C] p-6 rounded-md text-center">
            <img src={star} alt="" className="mx-auto" data-aos="fade-down" />
            <p className="text-2xl font-semibold" data-aos="fade-down">4.7/5 <span className="text-white text-2xl font-semibold"><span className="text-[#D3B86A]">170</span> ratings</span></p>
          </div>

          {/* Write a Review */}
          <div className="bg-[#1C1C1C] p-6 rounded-md text-center">
            <h3 className="text-lg font-semibold mb-4 justify-center" data-aos="fade-down">Write in the Questbook</h3>
           <div className="flex items-center justify-center gap-2 mb-3 text-white text-center" data-aos="fade-down">
  <img src={blstar} alt="black star" className="" />
  <span className="text-sm text-white">Your rating here</span>
</div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded bg-black text-white placeholder-white "
                data-aos="fade-down"
              />
              <input
                type="text"
                placeholder="Location"
                className="w-full px-4 py-3 rounded bg-black text-white placeholder-white"
                data-aos="fade-down"
              />
              <textarea
                rows="4"
                placeholder="Your Message here"
                className="w-full px-4 py-9  rounded bg-black text-white placeholder-white resize-none"
                data-aos="fade-down"
              />
            </div>
            <button className="w-full mt-4 bg-[#D3B86A] text-black font-semibold py-3 rounded flex items-center justify-center gap-2 cursor-pointer" data-aos="zoom-in">
              < IoChatbubble/> Leave Message
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 md:col-span-2">
              {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-[#1F1F1F] p-6 rounded-md text-white">
              {/* User Info */}
              <div className="flex items-center gap-4 mb-3" >
                        <img
                          src={john}
                          alt="avatar"
                          className="w-18 h-18 rounded object-cover"
                          data-aos="fade-left"
                        />
                        <div>
                          <div className="flex items-center gap-2 text-lg bold " data-aos="fade-left">
                          <p className="font-bold text-lg">John Doe</p>
                            <span><img src={star} alt="" /></span>
                            <span className="font-bold text-md text-white">4.1/5</span>
                          </div>
                          <p className="text-md text-white">Seattle, Washington</p>
                        </div>
                      </div>
                <div className="w-full border-b border-gray-100 mt-1 mb-5" data-aos="fade-left"></div>
              
              {/* Message */}
              <p className="text-white text-sm leading-relaxed" data-aos="fade-left">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.”
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
    
  );
}

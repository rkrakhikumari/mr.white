import React from "react";
import contact from "../assets/Contact.png";
import msg from "../assets/Message.png";
import Navbar from "./landingPage/Navbar";
import Footer from "./landingPage/Footer";
import { IoChatbubble } from "react-icons/io5";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white font-work">
        <img src={contact} alt="" className="w-full h-full" />

        {/* Form section */}
        <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-2 pl-10 pr-10">
          <div className="py-14">
            {/* Form */}
            <form className="space-y-6 pt-10">
              <input
                type="text"
                placeholder="Full Name*"
                required
                className="w-full bg-[#1A1A1A] text-[#FFFFFF] placeholder-[#FFFFFF] p-3 rounded-md" data-aos="fade-down"
              />
              <input
                type="email"
                placeholder="E-mail*"
                required
                className="w-full bg-[#1A1A1A] text-[#FFFFFF] p-3 rounded-md placeholder-[#FFFFFF]" data-aos="fade-down"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full bg-[#1A1A1A] text-white p-3 rounded-md placeholder-[#FFFFFF]" data-aos="fade-down"
              />

              {/* SUBJECT (with visible label inside) */}
              <div>
                <select
                  className="w-full bg-[#1A1A1A] text-white p-3 rounded-md" data-aos="fade-down"
                  defaultValue=""
                  required
                >
                  <option value="" disabled hidden>
                     Subject
                  </option>
                  <option>General Inquiry</option>
                  <option>Support</option>
                  <option>Feedback</option>
                </select>
              </div>

              <textarea
                rows={5}
                placeholder="Write your message here"
                className="w-full bg-[#1A1A1A] text-white p-3 rounded-md placeholder-[#FFFFFF] focus:outline-none resize-none" data-aos="fade-down"
              ></textarea>

              {/* Centered Send Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#D3B86A] text-black text-lg px-12 py-3 rounded-md flex items-center gap-2 font-medium cursor-pointer" data-aos="zoom-in"
                >
                  <IoChatbubble />
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Image on right */}
          <div className="flex items-center justify-center" data-aos="fade-left">
            <img
              src={msg}
              alt="Dog holding envelope"
              className="max-w-full h-auto rounded-md pt-10"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

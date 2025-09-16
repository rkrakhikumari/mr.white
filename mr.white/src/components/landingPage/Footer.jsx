import React from "react";
import { IoChatbubble } from "react-icons/io5";
import logo from "../../assets/logo.png";
import x from "../../assets/X.png";
import facebook from "../../assets/LogoFacebook.png";
import insta from "../../assets/LogoInstagram.png";
import youtube from "../../assets/LogoYoutube.png";
import { useNavigate } from "react-router-dom";


export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-gradient-to-t from-[#000000] to-[#191919] text-white font-work">
      {/* Top Grid Section */}
      <div className="max-w-screen-2xl w-full px-6 md:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Branding */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src={logo} alt="Logo" className="w-10 h-10" data-aos="fade-up-right"/>
            <div>
              <h2 className="text-[#D3B86A] font-bold text-md" data-aos="fade-up-right">Mr. White</h2>
              <p className="text-xs" data-aos="fade-up-right">Guide to All Paws</p>
            </div>
          </div>
          <p className="text-sm text-white" data-aos="fade-up-right">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do ei.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-[#D3B86A] font-semibold mb-4 border-l-4 border-white pl-2" data-aos="fade-up-right">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm" data-aos="fade-up-right">
            <li><a href="/" className="hover:text-[#D3B86A]">Home</a></li>
            <li><a href="/about" className="hover:text-[#D3B86A]">About</a></li>
            <li><a href="/subscriptions" className="hover:text-[#D3B86A]">Subscriptions</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-[#D3B86A] font-semibold mb-4 border-l-4 border-white pl-2" data-aos="fade-up-right">
            Social Media
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="flex items-center gap-2 hover:text-[#D3B86A]" data-aos="fade-up-right">
                <img src={insta} alt="Instagram" /> Instagram
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center gap-2 hover:text-[#D3B86A]" data-aos="fade-up-right">
                <img src={facebook} alt="Facebook" /> Facebook
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center gap-2 hover:text-[#D3B86A]" data-aos="fade-up-right">
                <img src={x} alt="X" /> X.com
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center gap-2 hover:text-[#D3B86A]" data-aos="fade-up-right">
                <img src={youtube} alt="YouTube" /> YouTube
              </a>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
            <h4 className="text-[#D3B86A] font-semibold border-l-4 border-white pl-2" data-aos="fade-up-right">
              Community
            </h4>
            <button
            onClick={() => navigate("/contact")}
            className="flex items-center gap-2 bg-[#D3B86A] text-black font-medium px-4 py-2 rounded-md text-sm sm:text-md cursor-pointer"
            data-aos="zoom-in"
          >
            <IoChatbubble className="text-lg" />
            Contact
          </button>

          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-[#D3B86A]" data-aos="fade-up-right">
                Discord
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-[#D3B86A]" data-aos="fade-up-right">
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#191919] text-white text-sm py-4 px-6 flex flex-col sm:flex-row justify-between items-center max-w-screen-2xl mx-auto w-full gap-2">
        <div>All rights reserved ©</div>
        <div className="flex gap-3 text-sm">
          <a href="#" className="hover:text-white">Terms & Conditions</a>
          <span>/</span>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

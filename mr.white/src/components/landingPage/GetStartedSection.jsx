import React from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import jediDog from "../../assets/jedi-dog.png"; 
import { useNavigate } from "react-router-dom";

import { TbLogin } from "react-icons/tb";


export default function GetStartedSection() {
  const navigate = useNavigate();

  return (
    <div className=" bg-gradient-to-t from-[#0C0C0C] to-[#000000] text-white py-16 font-work ">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        
        {/* LEFT: Image */}
        <div className="flex justify-center" data-aos="zoom-in">
          <img src={jediDog} alt="Mr. White Jedi" />
        </div>

        {/* RIGHT: Text & Steps */}
        <div>
          {/* Heading */}
          <h2 className="font-worksans text-3xl md:text-4xl font-semibold mb-4">Get Started with Mr. White in 3 Easy Steps</h2>
          <p className="text-xl text-white mb-10">
            A short guide on how to get started with Mr. White.
          </p>

          {/* Steps */}
          <div className="space-y-6 pr-12">
            {/* Step 1 */}
            <div className="bg-gradient-to-r from-[#1D1D1D] to-[#000000] p-5 rounded-lg" data-aos="fade-left">
              <div className="flex gap-4 items-center">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D3B86A] text-black font-bold flex items-center justify-center">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-1">Sign Up</h4>
                  <p className="text-md text-white">
                    Create your account in moments — join the Companion Crew for free or the Elite Pack as a full member — to start your journey with Mr. White and your companion.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-r from-[#1D1D1D] to-[#020202] p-5 rounded-lg" data-aos="fade-left">
              <div className="flex gap-4 items-center">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D3B86A] text-black font-bold flex items-center justify-center">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-1">Choose Your Subscription</h4>
                  <p className="text-md text-white">
                    Discover your personal portal with two plans: the free Companion Crew and the Elite Pack Premium. The Companion Crew offers 24/7 tailored guidance, wisdom, and a history of your dog queries. Upgrade to the Elite Pack to unlock the Legacy of Love Living Hub — a unique, AI-powered space to honor your dog’s life and keep their care organized with ease.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-r from-[#1D1D1D] to-[#050505] p-5 rounded-lg" data-aos="fade-left">
              <div className="flex gap-4 items-center">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D3B86A] text-black font-bold flex items-center justify-center">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-1">Access Your Personal Portal</h4>
                  <p className="text-md text-white">
                    Step into your personal portal with Mr. White, where tailored guidance, records, and wisdom for you and your dog are available 24/7.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <button className="bg-[#D3B86A] text-xl text-black font-semibold px-10 py-3 rounded-md transition flex items-center gap-2 cursor-pointer" data-aos="zoom-in"   onClick={() => navigate("/login")}
>
              <TbLogin className="w-7 h-7" />
              Sign up & Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

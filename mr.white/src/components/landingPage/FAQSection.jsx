import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import mrWhite from "../../assets/mr.png";
import logos from "../../assets/logos.png"; 
import { IoChatbubble } from "react-icons/io5";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";



export default function FAQPage() {
  const navigate = useNavigate();

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white font-work min-h-screen flex flex-col justify-between">
      {/* MAIN SECTION */}
      <div className="max-w-8xl  py-20 grid grid-cols-1 lg:grid-cols-[40%_60%] gap">
  {/* LEFT COLUMN */}
  <div className="flex flex-col justify-between">
    <div className="px-12" >
      <h2 className="text-3xl font-semibold mb-3 leading-tight"  data-aos="fade-right">
        Discover Mr. White: Your Questions Answered
      </h2>
      <p className="text-white mb-6 text-xl">
        Frequently Asked Questions
      </p>

      <div className="bg-[#1A1A1A] rounded-lg p-6 mb-10 mr-20">
        <p className="text-xl text-[#D3B86A] mb-2 font-medium">Still have questions?</p>
        <p className="text-md text-white mb-4">
          Can’t find your question? Contact us directly!
        </p>
        <button className="bg-[#D3B86A] text-xl text-black font-semibold px-5 py-2.5 rounded-md hover:brightness-110 transition flex items-center gap-2 cursor-pointer" data-aos="zoom-in" onClick={() => navigate("/contact")}>
          <IoChatbubble className="text-lg" />
          Contact Us
        </button>
      </div>
    </div>
    <img src={mrWhite} alt="Mr. White"className="w-full h-auto object-cover" data-aos="zoom-in-up"/>

  </div>

  {/* RIGHT COLUMN */}
<div className="bg-[#1A1A1A] rounded p-6 w-full max-w-[860px]">
  <div className="space-y-6">
    {/* Each Question Block */}
    <div>
      <div className="flex justify-between items-start text-xl font-semibold text-white" data-aos="fade-up-right">
        <span className="mt-5" >Who is Mr. White?</span>
        <FaChevronUp className="text-[#D3B86A] text-lg mt-1" />
      </div>
      <p className="text-md text-white mt-3" data-aos="fade-up-right">
        Mr. White is a master of the dog world who, after a life of love and service, ascended to join a lineage of dog guardians throughout history. Now, as a digital guide inspired by Anahata Graceland and powered by AI, Mr. White shares wisdom to deepen the bond between dogs and their people. Ask him about breeds, care, history, or dog-human connections, and he’ll provide thoughtful answers to support your journey. Mr. White can also serve as an ageless skillful assistant to all your dogs needs with alerts, store records etc. should you become an Elite Pack member.
      </p>
    </div>
    
    {/* Divider */}
    <div className="border-t border-black" data-aos="fade-up-right"></div>

    {/* Static Questions */}
    {[
      "Can I use Mr. White for free?",
      "What benefits come with the Elite Pack Membership?",
      "What is the BlockchainDNA NFT, and how does it secure my dog’s bond with me?",
      "How does Mr. White build community for me and my dog?",
      "Is there a reduced rate for veterinarians and pet service professionals?",
      "How does Mr. White support top dog product companies and other organizations?",
      "Can I talk to Mr. White about anything in life?",
      "How does Mr. White help me save money?",
      "What kinds of products does Mr. White recommend?",
      "Are my pet’s records safe with Mr. White?",
      "How does Mr. White support dog-human relationships?",
      "What if I need help with a specific dog issue?",
      "How do I join Mr. White’s Elite pack?",
    ].map((question, i) => (
      <div key={i}>
        <div className="flex justify-between items-center text-xl font-semibold text-white" data-aos="fade-up-right">
          <span>{question}</span>
          <FaChevronDown className="text-[#D3B86A] text-lg" />
        </div>
        <div className="border-t border-black mt-4" data-aos="fade-up-right"></div>
      </div>
    ))}
  </div>
</div>

</div>


      {/* LOGOS */}
      <span className="mb-20" data-aos="zoom-in"><img src={logos} alt="" /></span>
      
    </div>
  );
}

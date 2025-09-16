import React from "react";
import dogHoodie from "../../assets/dog_in_hoodie.png"; 
import nancy from "../../assets/nancy.png";
import tick from "../../assets/tick.png";
import star from "../../assets/star.png";
import { PiBoneFill } from "react-icons/pi";
import JourneySection from "./JourneySection"
import BenefitsSection from "./BenefitsSection"
import GetStartedSection from "./GetStartedSection"
import PricingPlans from "./PricingPlans"
import FAQSection from "./FAQSection"
import Footer from "./Footer"
import Navbar from "../landingPage/Navbar"
import Reveal from "../../utils/Reveal";
import { useNavigate } from "react-router-dom";

 


export default function HeroSection() {
  const navigate = useNavigate();

  const features = [
    "All-in-One Solution",
    "For Every Dog & their human",
    "Knowledge to strengthen your bond",
    "100% Human Support",
  ];

  return (
    <>
    <Navbar />
    <section className="bg-gradient-to-b from-[#0D0D0D] to-[#020202] font-work flex flex-col md:flex-row items-center justify-between px-10 py-12 ">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-7">
        {/* Heading */}
        <Reveal axis="y" axisValue={20}>
  <h2 className="text-5xl font-work font-semibold leading-snug text-white">
    Secrets of Paws and Humans, <br />
    revealed they are.
  </h2>
</Reveal>

  <Reveal axis="y" axisValue={20}>
  <p className="text-white text-2xl">
    All the information for dogs and humans,
    <br /> packed into one hub.
  </p>
</Reveal>

  <Reveal axis="y" axisValue={30}>
  <div className="grid grid-cols-2 gap-3 text-sm font-bold text-white">
    {features.map((f, i) => (
      <div key={i} className="flex items-center gap-2">
        <span>
          <img src={tick} alt="tick" />
        </span>
        {f}
      </div>
    ))}
  </div>
</Reveal>

<Reveal axis="y" axisValue={30}>
  <button
  onClick={() => navigate("/subscriptions")}
  className="bg-[#D3B86A] text-black font-semibold px-10 py-3 rounded-md flex items-center gap-2 transition cursor-pointer"
  data-aos="zoom-in"
>
  <PiBoneFill className="text-lg" />
  View Subscription
</button>

</Reveal>


       <Reveal axis="y" axisValue={40}>
  <div className="bg-gradient-to-b from-[#050505] to-white/10 font-work rounded-b-lg p-6">
    <div className="flex items-center gap-3">
      <img src={nancy} alt="Nancy" className="w-14 h-14" />
      <div>
        <h4 className="font-semibold text-white">Nancy S</h4>
        <p className="flex items-center gap-2 text-sm text-white">
          Auburn, WA | <img src={star} alt="star" />
        </p>
      </div>
    </div>
    <p className="mt-3 text-lg text-gray-300 italic">
      Meeting Anahata Graceland and Arturo was a great experience;
      full of <br /> loving, expert advice and attention to our needs.
    </p>
  </div>
</Reveal>
      </div>

      {/* Right Image */}
  <div className="mt-8" data-aos="zoom-in">
    <img
      src={dogHoodie}
      alt="Dog in hoodie"
      className="rounded-xl shadow-lg"
    />
  </div>
    </section>
        <JourneySection/>
        <BenefitsSection/>
        <GetStartedSection/>
        <PricingPlans/>
        <FAQSection/>
        <Footer/>
</>
  );
}

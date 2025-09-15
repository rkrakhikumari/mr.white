import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import wisdomImg from "../../assets/wisdom.png";
import storageImg from "../../assets/storage.png";
import familyImg from "../../assets/family.png";
import piggyImg from "../../assets/piggy.png";
import { PiBoneFill } from "react-icons/pi";
import cmnt from "../../assets/cmnt.png";

export default function JourneySection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-[#0D0D0D] text-white px-6 md:px-10 py-14 font-work">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        Preserve, Learn, and Honor Your Dog’s Journey
      </h2>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div
          className="bg-black rounded-lg shadow-md flex flex-col h-full"
          data-aos="fade-right"
        >
          <img
            src={wisdomImg}
            alt="Ancient Wisdom"
            className="rounded-md mb-4 w-full object-cover"
          />
          <h3 className="text-lg font-semibold pl-4 pr-4">
            Ancient Wisdom for Modern Dog Care
          </h3>
          <p className="text-md text-white pl-4 pr-4 pb-4">
            Mr. White holds eons of dog knowledge, from ancient canine history
            to modern care insights, ready for pack members to explore. <br />
            <br />
            Use this wisdom to understand your companion’s needs, enhance
            training, keep track of vaccination times, and deepen your bond —
            whether you’re solving a behavior challenge, choosing the best
            activities, or simply learning more about your dog’s unique spirit.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="bg-black rounded-lg shadow-md flex flex-col h-full"
          data-aos="fade-down"
        >
          <img
            src={storageImg}
            alt="Secure Storage"
            className="rounded-md mb-4 w-full object-cover"
          />
          <h3 className="text-lg font-semibold pl-4 pr-4">
            All-in-One Secure Storage Solution
          </h3>
          <p className="text-md text-white pl-4 pr-4 pb-4">
            Mr. White offers a customizable storage solution for you and your
            dog, keeping everything you need in one secure place. Upload vet
            records, certifications, health history, training milestones, or
            cherished photos and stories — Mr. White remembers it all.
            <br />
            <br />
            Access this information anytime, anywhere, whether you need a vet
            record for an appointment, an alert for the appt, a certification
            for travel, or a special memory to share.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="bg-black rounded-lg shadow-md flex flex-col h-full"
          data-aos="fade-left"
        >
          <img
            src={familyImg}
            alt="Family Bonds"
            className="rounded-md mb-4 w-full object-cover"
          />
          <h3 className="text-lg font-semibold mb-2 pl-4 pr-4">
            Building Interspecies Family Bonds
          </h3>
          <p className="text-md text-white pl-4 pr-4 pb-16">
            Mr. White and I, Anahata Graceland, a breeder with over 50 years of
            knowledge, offer pack members a rare perspective: dogs and humans
            belong to each other as family, not as owners.
            <br />
            <br />
            Together, we guide you in building an interspecies culture that
            honors the true intelligence and spirit of your bond, doing right by
            each other with love and respect.
          </p>
        </div>
      </div>

      {/* Read More Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-[#D3B86A] text-black px-10 py-2 rounded-md font-semibold flex items-center gap-2 cursor-pointer" data-aos="zoom-in">
          <PiBoneFill /> Read More
        </button>
      </div>

      {/* Legacy Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-32 mt-16 bg-black md:p-10 p-6 rounded-lg">
        {/* Image */}
        <div className="relative max-w-xs w-full mb-6 md:mb-0">
          <img
            src={piggyImg}
            alt="Dog Picture Placeholder"
            className="rounded-lg shadow-lg w-full object-cover" data-aos="fade-down-right"
          />
          <div className="absolute -top-10 -right-10 px-2 py-1 text-xs font-semibold rounded" data-aos="fade-down">
            <img src={cmnt} alt="Comment Icon" />
          </div>
        </div>

        {/* Text */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">Legacy of Love Dog Hub</h3>
          <p className="font-semibold text-lg mb-4">
            A New Era in Caring for Your Best Friend <br />
            <span className="italic font-normal text-xl">
              “Where your dog’s health, story, and happiness come together.”
            </span>
          </p>

          <p className="font-public text-lg text-white leading-relaxed">
            Unlock the Elite Pack and step into (Your Dog’s Name) Legacy of Love
            Living Dog Hub, your AI-powered sanctuary for celebrating and caring
            for your cherished companion. This one-of-a-kind living hub securely
            stores vital records, sets timely medication alerts, tracks
            vaccinations, and beautifully organizes stories and photos from your
            shared journey. It’s truly designed to keep every memory you cherish
            while helping life move smoothly and safely. Plus, you can
            effortlessly print a custom book of any section you choose, with Mr.
            White guiding you every step of the way. Inspired by The Way of the
            Dog by Anahata Graceland, this innovative personal assistant captures
            every milestone and joy you’ve shared — offering a connection and
            memory archive unmatched anywhere else.
          </p>
        </div>
      </div>
    </section>
  );
}

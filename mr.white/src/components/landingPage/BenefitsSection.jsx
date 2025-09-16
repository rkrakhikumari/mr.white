import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import { FaBook, FaDog, FaBell, FaCertificate, FaMapMarkedAlt, FaTags, FaUsers, FaUserShield } from "react-icons/fa";
import group from "../../assets/Group.png";
import fwisdom from "../../assets/fwisdom.png";
import trusted from "../../assets/trusted.png";
import vetsupport from "../../assets/vetsupport.png";
import logo from "../../assets/logo(1).png";
import logo2 from "../../assets/logo(2).png";
import exclusive from "../../assets/exculsive.png"
import blockchain from "../../assets/blockchain.png"
import personal from "../../assets/personal.png"
import bookmark from "../../assets/BookBookmark.png"
import vibrant from "../../assets/familyy.png"
import bag from "../../assets/suitcase.png"
import free from "../../assets/free.png";
import discount from "../../assets/discount.png"
import { PiBoneFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";



export default function BenefitsSection() {
  const navigate = useNavigate();

  return (
    <>
    <div className="bg-black text-white py-14 px-6 md:px-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10" data-aos="zoom-in-right">
        The Benefits of Mr. White In Your Life
      </h2>

      {/* Card Container */}
      <div className="bg-[#1c1c1e] rounded-lg p-6 md:p-10">
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-6 border-b border-black pb-4">
          <img src={logo} alt="free-icon" className="w-6 h-6" />
          <h3 className="text-2xl font-semibold">
            1. For Companion Crew Pack Members (Free)
          </h3>
        </div>

        {/* Top Section: Text Left - Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-1">
          {/* LEFT SIDE — Save Time & Bond */}
          <div className="space-y-10">
            {/* Save Time and Money */}
            <div className="flex items-start gap-4">
              <IoTimeOutline className="text-[#D3B86A] w-10 h-7" />
              <div>
                <h4 className="font-semibold text-md mb-1">Save Time and Money</h4>
                <p className="text-md text-white">
                  Mr. White helps you avoid costly vet visits with complete
                  health histories and timely care recommendations. Pack members
                  enjoy savings on trusted products and services, making quality
                  care more affordable.
                </p>
              </div>
            </div>
             <div className="border border-black"></div>


            {/* Build a Deeper Bond */}
            <div className="flex items-start gap-4">
              <FaLink className="text-[#D3B86A] w-8 h-5 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Build a Deeper Bond</h4>
                <p className="text-md text-white">
                  With wisdom, guidance, and a community behind you, Mr. White
                  supports you in creating a joyful, harmonious life with your
                  beloved companion.
                </p>
              </div>
            </div>
            <div className="border border-black"></div>
          </div>

          {/* RIGHT SIDE — Image */}
          <div className="flex mb-6">
            <img src={free} alt="duel" className="rounded-md max-w-full h-auto" data-aos="zoom-in-up" />
          </div>
        </div>

        {/* Bottom Section: 2x2 Grid of Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-b border-black pb-6 mb-6">
          {/* Daily Wisdom and Guidance */}
          <div className="flex items-start gap-4">
            <img src={fwisdom} alt="wisdom" className="w-6 mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Daily Wisdom and Guidance</h4>
              <p className="text-md text-white">
                Access free, expert advice from Mr. White — tips on training,
                health, play, and bonding that help enrich your relationship
                with your dog every day. Available through your personal portal
                and X & other social media.
              </p>
            </div>
          </div>

          {/* Trusted Product Recommendations */}
          <div className="flex items-start gap-4">
            <img src={trusted} alt="trusted"/>
            <div>
              <h4 className="font-semibold mb-1">Trusted Product Recommendations</h4>
              <p className="text-md text-white">
                Benefit from vetted product suggestions, focusing on quality and
                safety, curated from over 50 years of breeder experience.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Community Connection */}
          <div className="flex items-start gap-4">
            <img src={group} alt="community" className="w-6  mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Community Connection</h4>
              <p className="text-md text-white">
                Join a supportive community of dog lovers to share stories,
                advice, meetups, and celebrations, creating friendships and
                shared joy.
              </p>
            </div>
          </div>

          {/* Practical Support for Professionals */}
          <div className="flex items-start gap-4">
            <img src={vetsupport} alt="support" className=" mt-1" />
            <div>
              <h4 className="font-semibold mb-1">
                Practical Support for Professionals
              </h4>
              <p className="text-md text-white">
                Veterinarians, trainers, and groomers can join at a reduced
                rate, gaining access to a network for sharing insights and
                connecting with dog families.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-black text-white pb-10 px-6 md:px-16">
  <div className="bg-[#1c1c1e] rounded-lg p-6 md:p-10">
    {/* Section Title */}
    <div className="flex items-center gap-3 mb-6 border-b border-black pb-4">
      <img src={logo2} alt="elite-icon" className="text-[#D3B86A] w-6 h-6" />
      <h3 className="text-2xl font-semibold">
        2. For Elite Pack Members (Premium) + everything from the Companion Crew Pack Members
      </h3>
    </div>

    {/* BENEFITS PAIRED IN ROWS */}
    <div className="space-y-6">
      {/* ROW 1 */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left */}
        <div className="flex items-start gap-4" data-aos="fade-right">
          
          <img src={exclusive} alt="" className="w-6 mt-1" />
          <div>
            <h4 className="font-bold text-md mb-2">Exclusive Access to the Legacy of Love Dog Hub</h4>
            <p className="text-md text-white">
              Unlock the full power of Mr. White’s AI-driven personal portal that securely stores your dog’s complete health records, training milestones, photos, stories, and more — available anytime, anywhere. This hub simplifies care management and preserves your dog’s legacy.
            </p>
          </div>
        </div>
        {/* Right */}
        <div className="flex items-start gap-4" data-aos="fade-left">
          <img src={bookmark} alt="" className="w-6 mt-1" />
          <div>
            <h4 className="font-bold text-md mb-2">Create a Beautiful Keepsake Book</h4>
            <p className="text-md text-white">
            As an Elite Pack member, you have the unique ability to transform your dog’s story into a beautifully personalized book. Whether it’s to celebrate milestones like a first birthday, commemorate a special journey, or simply preserve your favorite memories, you can easily select any section of your Legacy of Love Dog Hub to print as a keepsake. This tangible tribute allows you to hold, share, and treasure the rich life you and your companion have built together—making memories truly timeless.             </p>
          </div>
        </div>
      </div>
      <div className="border-t border-black" />

      {/* ROW 2 */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left */}
        <div className="flex items-start gap-4" data-aos="fade-right">
          <img src={personal} alt="" className="w-6 mt-1" />
          <div>
            <h4 className="font-bold text-md mb-2">Personalized Care Alerts and Reminders</h4>
            <p className="text-md text-white">
              Never miss a medication dose, vet visit, or appointment with timely alerts tailored to your dog’s needs.
            </p>
          </div>
        </div>
        {/* Right */}
        <div className="flex items-start gap-4" data-aos="fade-left">
          <img src={blockchain} alt="" className="w-6 mt-1" />
          <div>
            <h4 className="font-bold text-md mb-2">BlockchainDNA NFT for Legacy Security</h4>
            <p className="text-md text-white">
              Receive a unique digital certificate securing your dog’s records on the blockchain — preserving their legacy for generations.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-black" />

      {/* ROW 3 */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left */}
        <div className="flex items-start gap-4" data-aos="fade-right">
          <img src={bag} alt="" className="w-6 mt-1" />
          <div>
            <h4 className="font-bold text-md mb-2">Access to Trusted Local Services and Dog-Friendly Travel</h4>
            <p className="text-md text-white">
              Discover recommended vets, groomers, and destinations with real community reviews, making care and adventures easier to plan.
            </p>
          </div>
        </div>
        {/* Right */}
        <div className="flex items-start gap-4" data-aos="fade-left">
          <img src={discount} alt="" className="w-6 mt-1" />
          <div>
            <h4 className="font-bold text-md mb-2">Exclusive Product Discounts</h4>
            <p className="text-md text-white">
              Enjoy lifelong 5% discounts on premium, carefully reviewed products that enhance your dog’s health and happiness.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-black" />

      {/* ROW 4 */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left */}
        <div className="flex items-start gap-4" data-aos="fade-right">
          <img src={vibrant} alt="" className="w-6 mt-1" />
          <div>
            <h4 className="font-bold text-md mb-2">A Vibrant, Private Community</h4>
            <p className="text-md text-white">
              Join an exclusive circle of committed dog lovers for deeper connection, support, and shared growth.
            </p>
          </div>
        </div>
        {/* Right */}
        <div className="flex items-start gap-4" data-aos="fade-left">
          <img src={vetsupport} alt="" className="w-6 mt-1" />
          <div>
            <h4 className="font-bold text-md mb-2">Advanced Support for Professionals</h4>
            <p className="text-md text-white">
              Pet care professionals receive expanded tools and community features to enhance their services and build strong relationships with dog families.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    <div className="mt- flex justify-center">
  <button
  onClick={() => navigate("/subscriptions")}
  className="bg-[#D3B86A] text-black font-semibold px-10 py-3 rounded-md flex items-center gap-2 transition cursor-pointer"
  data-aos="zoom-in"
>
  <PiBoneFill className="text-lg" />
  View Subscription
</button>
        </div>
    </>
  );
}

import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { TbStarFilled } from "react-icons/tb";
import connect from "../../assets/connect.png"; 
import { PiBoneFill } from "react-icons/pi";
import access from "../../assets/access.png"
import book from "../../assets/Book.png"
import bag from "../../assets/trusted.png"
import network from "../../assets/network.png"
import group from "../../assets/Group.png"
import memory from "../../assets/memory.png"
import money from "../../assets/money.png"
import blockchain from "../../assets/blockchain.png"
import bone from "../../assets/bone.png"
import suitcase from "../../assets/suitcase.png"
import bookmark from "../../assets/BookBookmark.png"
import discount from "../../assets/discount.png"
import family from "../../assets/famii.png"

export default function PricingPlans() {
  return (
    <div className="bg-gradient-to-t from-[#0D0D0D] to-[#000000] text-white font-work">
      {/* HERO SECTION */}
      <div className="" data-aos="zoom-in-down">
        <img
          src={connect}
          alt="Connect with Mr. White"
          className="h-full w-full pl-14 pr-14 pt-28"
        />
    </div>

      {/* PLANS SECTION */}
        <div className="max-w-365 mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start ">
        {/* Free Plan */}
        <div className="bg-gradient-to-r from-[#1C1C1C] to-[#222222] rounded p-8  flex flex-col justify-between shadow-md">
          <div>
            <h3 className="text-3xl font-semibold mb-2" data-aos="zoom-in-right">Mr. White’s Companion Crew – FREE Plan</h3>
            <p className="text-md font-semibold text-white mb-4" data-aos="zoom-in-right">
              Enjoy a FREE account with Benefits of Mr. White
            </p>
            <p data-aos="zoom-in-right">Mr. White guides dogs and their humans toward a fulfilling life with free daily tips on X and other socials @MrWhiteAIBuddy and his website at Mr.WhiteAIBuddy.com. Discover toys, rituals, and training to deepen your bond, plus proven products for health and care, backed by Anahata Graceland’s 50+ years of expertise. </p>
            <p className="text-3xl  text-[#D3B86A] mb-2 mt-6" data-aos="zoom-in-right">Free!</p>
            <p className="text-sm mb-4" data-aos="zoom-in-right">*Lifetime free subscription</p>

            <div className="border border-white mb-10" data-aos="zoom-in-right"></div>

            <p className="text-md font-semibold flex gap-2" data-aos="zoom-in-right"> <img src={access} alt="" />Access Your Personal Portal Anytime </p>
            <p className="text-md text-white mt-2" data-aos="zoom-in-right">Step into your personal portal with Mr. White, where tailored guidance, and wisdom for you and your companion are available 24/7. It also includes an ongoing history of your priceless queries about your dog. </p>
            <div className="border border-black mt-5 mb-5" data-aos="zoom-in-right"></div>

            <p className="text-md font-semibold flex gap-2" data-aos="zoom-in-right"> <img src={book} alt="" />Unlock Expert Canine Knowledge</p>
            <p className="text-md text-white mt-2" data-aos="zoom-in-right">Gain insight into your dog’s history, needs, and bond with humansthrough Mr. White’s vast data and real-world experience. Get tailored input on questions you raise such as: training and activity recommendations to strengthen your connection. Benefit from funevents, networks, and practices that honor dogs as souls, fostering happier lives together.</p>
            <div className="border border-black mt-5 mb-5" data-aos="zoom-in-right"></div>

            <p className="text-md font-semibold flex gap-2" data-aos="zoom-in-right"> <img src={bag} alt="" />Top Product Recommendations with Care</p>
            <p className="text-md text-white mt-2" data-aos="zoom-in-right">Mr. White reviews products with Anahata Graceland’s 50+ years of expertise—those used in her kennel earn a star, as do all we recommend. We focus on quality, longevity, safety, and dog approval, gathering marketplace feedback to ensure the best. With little pet industry regulation, we deliver trusted choices.</p>
            <div className="border border-black mt-5 mb-5" data-aos="zoom-in-right"></div>

            <p className="text-md font-semibold flex gap-2" data-aos="zoom-in-right"><span><img src={group} alt="" /></span>A Unique Dog Lover’s Community</p>
            <p className="text-md text-white mt-2" data-aos="zoom-in-right">Mr. White Gathers his pack members to share the unending knowledge and great ideas person to person. Meet new friends, create meet-ups and enjoy accessing a resource that will last a lifetime.</p>
             <div className="border border-black mt-5 mb-5" data-aos="zoom-in-right"></div>

            <p className="text-md font-semibold flex gap-2" data-aos="zoom-in-right"><span><img src={network} alt="" /></span>A Thriving Network for Dog Welfare Professionals </p>
            <p className="text-md text-white mt-2" data-aos="zoom-in-right">Mr. White supports veterinarians, groomers, trainers, product companies, event organizers, educators, nonprofits, dog park leaders, and wellness practitioners with reduced-rate pack membership. Access dog family records, exchange insights in a fun network, and connect with families to grow your craft and deliver quality care. </p>
            <div className="border border-black mt-5" data-aos="zoom-in-right"></div>

          </div>
            <button className=" bg-[#D3B86A] text-black font-semibold px-6 py-3 rounded-md text-lg w-full hover:brightness-110 transition flex items-center justify-center gap-2 cursor-pointer" data-aos="zoom-in">
            <PiBoneFill className="text-xl" />
            Fetch Subscription
            </button>

        </div>

        {/* Premium Plan */}
        <div className="bg-gradient-to-r from-[#1C1C1C] to-[#222222] rounded border border-[#D3B86A] p-6 flex flex-col justify-between shadow-lg relative">
          <div>
            {/* Badge */}
            <div className="absolute -top-3 right-80  bg-[#D3B86A] text-black text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              Most Wanted
            </div>
            <h3 className="text-3xl font-semibold mb-1" data-aos="zoom-in-left">Mr. White’s Elite Pack</h3>
            <p className="text-xl italic text-white mb-2" data-aos="zoom-in-left">
              (Your Dog’s Name) Legacy of Love Living Hub
            </p>
            <div className="px-4 pt-1 pb-1 w-118 h-9 bg-[#D3B86A] text-black font-semibold border rounded-lg" data-aos="zoom-in-left">Everything in the FREE Account Plus this Invaluable Service </div>
            <p className="text-md pt-2 text-[#FFFFFF]" data-aos="zoom-in-left">Unlock an all-encompassing, AI-powered subscription designed to honor your companion’s unique journey and simplify every aspect of their care. This seamless, thoughtfully crafted living hub combines advanced technology with decades of expertise to preserve memories, streamline health management, and nurture the extraordinary bond you share—making life safer, easier, and infinitely more meaningful for both of you.</p>

            <p className="text-3xl  text-[#D3B86A] mt-3 mb-3" data-aos="zoom-in-left">
              $19.95/Month{" "}– Save 20% on yearly plan
            </p>
            <p className="text-md italic mb-4"data-aos="zoom-in-left">Includes dedicated human support!</p>
            <div className="border border-white mb-2" data-aos="zoom-in-left"></div>
            <div>
                <div>
                    <p className="text-md font-semibold flex gap-2 pt-2" data-aos="zoom-in-left"> <span><img src={memory} alt="" /></span>Comprehensive Memory & Care Archive</p>
                    <p className="text-md text-white mt-2" data-aos="zoom-in-left">Securely store vital records, vaccination history, medication alerts, vet visits, milestones, photos, and stories—all organized beautifully in one place and accessible 24/7. Preserve every cherished moment while keeping your dog’s care on track.</p>
                    <div className="border border-black mt-5 mb-5" data-aos="zoom-in-left"></div>

                </div>
                <div>
                    <p className="text-md font-semibold flex gap-2" data-aos="zoom-in-left"><span><img src={money} alt="" /></span>Personalized Health & Savings Tracker</p>
                    <p className="text-md text-white mt-2" data-aos="zoom-in-left">Avoid duplicate vet costs with your pups full health history at your fingertips. Receive expert care tips and timely reminders tailored to support extending your dog’s life and wellbeing.</p>
                    <div className="border border-black mt-5 mb-5" data-aos="zoom-in-left"></div>

                </div>
                <div>
                    <p className="text-md font-semibold flex gap-2" data-aos="zoom-in-left"><span><img src={blockchain} alt="" /></span>BlockchainDNA NFT Legacy</p>
                    <p className="text-md text-white mt-2" data-aos="zoom-in-left">Protect your family bond with a unique BlockchainDNA NFT that verifies your dog’s records on the blockchain, ensuring an unbreakable, verifiable legacy passed down through generations, fully transferrable.</p>
                    <div className="border border-black mt-5 mb-5" data-aos="zoom-in-left"></div>

                </div>
                <div>
                    <p className="text-md font-semibold flex gap-2" data-aos="zoom-in-left"><span><img src={bone} alt="" /></span> Interspecies Culture & Bonding Guidance</p>
                    <p className="text-md text-white mt-2" data-aos="zoom-in-left">With over 50 years of experience, Anahata Graceland and Mr. White offer unique insights and guidance to help you nurture a deep, respectful relationship that honors your dog and helps you build a bond as equals each with your own roles in one family.</p>
                    <div className="border border-black mt-5 mb-5" data-aos="zoom-in-left"></div>

                </div>
                <div>
                    <p className="text-md font-semibold flex gap-2" data-aos="zoom-in-left"><span><img src={suitcase} alt="" /></span>Trusted Local Services & Dog-Friendly Travel</p>
                    <p className="text-md text-white mt-2" data-aos="zoom-in-left">Easily find and review vets, groomers, and discover dog-friendly hotels, restaurants, and destinations—making every outing a joyful adventure.</p>
                     <div className="border border-black mt-5 mb-5" data-aos="zoom-in-left"></div>

                </div>
                <div>
                    <p className="text-md font-semibold flex gap-2" data-aos="zoom-in-left"><span><img src={bookmark} alt="" /></span>Turn Memories into a Treasured Book</p>
                    <p className="text-md text-white mt-2" data-aos="zoom-in-left">One of the most special features of your Living Legacy of Love Dog Hub subscription is the ability to create a beautifully personalized book. Whether you want to commemorate your dog’s first birthday, a memorable milestone, or simply preserve your favorite photos and stories, you can easily select any section of the Living Hub to print as a keepsake. This tangible collection of memories is perfect for sharing with family and friends or cherishing for years to come—a lasting tribute to the unique journey you share with your companion.</p>
                    <div className="border border-black mt-5 mb-5" data-aos="zoom-in-left"></div>

                </div>
                <div>
                    <p className="text-md font-semibold flex gap-2" data-aos="zoom-in-left"><span><img src={family} alt="" /></span>Private Dog Family Community</p>
                    <p className="text-md text-white mt-2" data-aos="zoom-in-left">Connect with fellow dog lovers in an exclusive space to share stories, plan meetups, and strengthen your bonds within a warm, vibrant community.</p>
                 <div className="border border-black mt-5 mb-5" data-aos="zoom-in-left"></div>

                </div>
                <div>
                    <p className="text-md font-semibold flex gap-2" data-aos="zoom-in-left"><span><img src={discount} alt="" /></span>Exclusive Discounts & Early Access</p>
                    <p className="text-md text-white mt-2" data-aos="zoom-in-left">Enjoy lifetime 5% discounts on qualified recommended products and get first access to new offerings from trusted partners.</p>
                     <div className="border border-black mt-5" data-aos="zoom-in-left"></div>

                </div>
            </div>
          </div>
            <button className="mt-8 bg-[#D3B86A] text-black font-semibold px-6 py-3 rounded-md text-lg w-full hover:brightness-110 transition flex items-center justify-center gap-2 cursor-pointer" data-aos="zoom-in">
            <PiBoneFill className="text-xl" />
            Fetch Subscription
            </button>

        </div>
      </div>
    </div>
  );
}

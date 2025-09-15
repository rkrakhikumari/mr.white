import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./landingPage/Navbar";
import Footer from "./landingPage/Footer";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaCheckCircle, FaGraduationCap, FaChevronDown, FaChevronUp } from "react-icons/fa";
import img1 from "../assets/emo.png"
import img2 from "../assets/emo1.png"
import img3 from "../assets/emo2.png"
import img4 from "../assets/emo3.png"
import blstar from "../assets/blc_star.png"
import john from "../assets/john.png"
import { FaArrowLeft } from "react-icons/fa";
import star from "../assets/star.png";
import heroBanner from "../assets/product.png";
import prod1 from "../assets/prod1.png";
import prod2 from "../assets/prod2.png";
import prod3 from "../assets/prod3.png";
import prod4 from "../assets/prod4.png";

export default function ProductDetail() {
  const { id } = useParams();

  const featuresWithIcons = [
  { text: "2-in-1 Hydration & Feeding", icon: img1 },
  { text: "Leak-Proof Portability", icon: img2 },
  { text: "Safe, BPA-Free Material", icon: img3 },
  { text: "One-Button Dispensing", icon: img4 },
];


  const product = {
    title: "32oz 3-in-1 Portable Travel Water Bottle",
    images: [prod4, prod2, prod3],
    originalPrice: 29.99,
    discountedPrice: 24.99,
    rating: 4.7,
    reviews: 106,
    features: [
      "2-in-1 Hydration & Feeding",
      "Leak-Proof Portability",
      "Safe, BPA-Free Material",
      "One-Button Dispensing",
    ],
    colors: ["#000000", "#959A83", "#F2E1D9"],
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [accordionOpen, setAccordionOpen] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleAccordion = (index) => {
    setAccordionOpen(accordionOpen === index ? null : index);
  };

  const sections = ["Details", "Shipping", "Cleaning"];

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <div className="w-full">
        <img
          src={heroBanner}
          alt="Tail Wagging Banner"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="bg-black text-white font-sans px-6 md:px-10 py-16">
        <div className="flex items-center gap-2 mb-4" data-aos="fade-left">
  <FaArrowLeft className="text-[#D3B86A] text-lg" />
  <Link to="/product-page" className="text-lg text-white underline">
    Return to collection
  </Link>
</div>

        

        <div className="flex flex-col lg:flex-row gap-12 mt-10">
          {/* Product Images */}
          <div className="lg:w-1/2">
            <img
              src={selectedImage}
              alt="Selected Product"
              className="w-full rounded-lg"
            />

            <div className="flex gap-3 mt-4">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Thumbnail ${i}`}
                  className={`w-[225px] h-[160px] object-cover rounded-md border-2 cursor-pointer ${
                    selectedImage === img
                      ? "border-[#D3B86A]"
                      : "border-transparent"
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2 ">
            {/* Rating */}
            <div className="flex items-center gap-1 text-white font-semibold" data-aos="fade-down-right"  >
              <img src={star} alt="rating" className="" />
              {product.rating}/5{" "}
              <span className="ml-1 text-[#D3B86A]">{product.reviews}</span>
              <p className="text-sm font-semibold ml-1">ratings</p>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-semibold pb-5" data-aos="fade-down-right">{product.title}</h1>

            {/* Pricing */}
            <div className="flex items-center gap-4 pb-12" data-aos="fade-down-right">
              <p className="line-through text-white text-2xl">
                ${product.originalPrice}
              </p>
              <p className="text-[#D3B86A] font-semibold text-3xl">
                ${product.discountedPrice}
              </p>
            </div>

            {/* Description */}
            <p className="text-white text-md pb-10" data-aos="fade-down-right"> 
              The Tail-Wagging Love Portable Hydration bottle is a convenient,
              pet-themed water bottle designed for dog lovers to stay hydrated
              on the go.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6" data-aos="fade-down-right">
            {featuresWithIcons.map((feature, i) => (
                <div
                key={i}
                className="flex items-center gap-3 px-4 py-2 bg-[#1F1F1F] rounded-md text-md"
                >
                <img src={feature.icon} alt="" className="w-6 h-6" />
                {feature.text}
                </div>
            ))}
            </div>


            {/* Shipping + Add to Cart (No Gap) */}
            <div className="w-full overflow-hidden rounded-md mt-10">
              <div className="bg-[#1F1F1F] px-4 py-3 flex items-center justify-center gap-2" data-aos="fade-down-right">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p className="text-sm text-white">Shipped within 24h</p>
              </div>

              <button className="w-full bg-[#D3B86A] text-black py-3 font-bold flex items-center justify-center gap-2 cursor-pointer" data-aos="zoom-in">
                <PiShoppingCartSimpleFill className="w-5 h-5" />
                Add to Cart
              </button>
            </div>

            {/* Dog-care Box */}
            <div className="w-full bg-[#1C1C1C] px-4 py-5 mt-9 rounded-md flex flex-col items-center justify-center text-center">
              <div className="flex items-center justify-center gap-3" data-aos="fade-down-right">
                <div className="w-16 h-16 flex items-center justify-center bg-black text-white rounded-full text-xl">
                  <FaGraduationCap className="w-8" />
                </div>
                <p className="text-base text-white font-medium">
                  Developed with 50 years of dog-care knowledge.
                </p>
              </div>
            </div>

            {/* Color Selector */}
            <div className="mt-14 mb-4">
              <h4 className="text-xl font-semibold mb-3" data-aos="fade-down-right">Color</h4>
              <div className="flex gap-4" data-aos="fade-down-right">
                {product.colors.map((color, i) => (
                  <div
                    key={i}
                    className={`w-16 h-16 md:w-20 md:h-20 rounded border-2 cursor-pointer ${
                      selectedColor === color
                        ? "border-[#D3B86A]"
                        : "border-gray-600"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            {/* Accordion */}
            <div className="mt-8 text-lg md:text-xl border-t border-b border-gray-700 " data-aos="fade-down-right">
  {sections.map((section, i) => (
    <div key={i} className="py-6 border-t border-gray-700">
      <button
        className="w-full flex justify-between items-center font-semibold text-white cursor-pointer" data-aos="zoom-in"
        onClick={() => toggleAccordion(i)}
      >
        {section}
        {accordionOpen === i ? (
          <FaChevronUp className="text-sm" />
        ) : (
          <FaChevronDown className="text-sm" />
        )}
      </button>

      {accordionOpen === i && (
        <div className="text-sm text-white mt-3">
        </div>
      )}
    </div>
  ))}
</div>

          </div>
        </div>
      </div>

    {/* Review Section */}
<div className="mt-8">
  {/* Section Title */}
  <h2 className="text-3xl md:text-3xl font-semibold text-center mb-8" data-aos="fade-down">
    Word on the Streets
  </h2>

  {/* Leave a Review Form */}
  <div className="bg-[#191919] p-6 rounded-lg max-w-7xl mx-auto">
    <h3 className="text-white text-lg font-semibold mb-4 text-center" data-aos="fade-down">
      Leave a review
    </h3>

    {/* Stars */}
    <div className="flex justify-center items-center gap-1 mb-4 text-black" data-aos="fade-down">
     
      <span className="flex gap-3 items-center ml-3 text-sm text-white" data-aos="fade-down"><img src={blstar} alt="" />Your rating here</span>
    </div>

    {/* Form Fields */}
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        className="w-full px-4 py-2 rounded bg-[#000000] text-white placeholder-white "
        data-aos="fade-down"
      />
      <input
        type="text"
        placeholder="Location"
        className="w-full px-4 py-2 rounded bg-[#000000] text-white placeholder-white "
        data-aos="fade-down"
      />
      <textarea
        placeholder="Your Message here"
        rows="4"
        className="w-full px-4 py-2 rounded bg-[#000000] text-white resize-none placeholder-white "
        data-aos="fade-down"
      />
    </div>

    {/* Submit Button */}
    <button className="w-full mt-6 bg-[#D3B86A] text-black font-semibold py-3 rounded flex items-center justify-center gap-2 cursor-pointer" data-aos="zoom-in">
              <span key={star} className="text-xl cursor-pointer">★</span> Leave Review
    </button>
  </div>

  {/* Reviews List */}
  <div className="mt-10 space-y-6 max-w-7xl mx-auto mb-32" data-aos="fade-right">
    {[1, 2,3,4].map((review) => (
      <div
        key={review}
        className="bg-[#1F1F1F] p-6 rounded-lg text-white"
      >
        {/* User Info */}
        <div className="flex items-center gap-4 mb-3">
          <img
            src={john}
            alt="avatar"
            className="w-18 h-18 rounded object-cover"
          />
          <div>
            <div className="flex items-center gap-2 text-lg bold ">
            <p className="font-bold text-lg">John Doe</p>
              <span><img src={star} alt="" /></span>
              <span className="font-bold text-md text-white">4.1/5</span>
            </div>
            <p className="text-md text-white">Seattle, Washington</p>
          </div>
        </div>
  <div className="w-full border-b border-gray-100 mt-1 mb-5"></div>

        {/* Review Text */}
        <p className="text-white text-md leading-relaxed">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.”
        </p>
      </div>
    ))}
  </div>
</div>


      <Footer />
    </>
  );
}

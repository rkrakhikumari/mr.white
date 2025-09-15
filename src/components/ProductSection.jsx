import React from "react";
import bottleImg1 from "../assets/bottle.png";
import heroBanner from "../assets/product.png";
import Navbar from "./landingPage/Navbar";
import Footer from "./landingPage/Footer";
import star from "../assets/star.png";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Link } from "react-router-dom"; 

const productData = [
  {
    id: 1,
    title: "3-in-1 Portable Travel Water Bottle",
    image: [bottleImg1],
    price: 29.99,
    originalPrice: 24.99,
    rating: 4.7,
    reviews: 106,
  },
  {
    id: 1,
    title: "3-in-1 Portable Travel Water Bottle",
    image: [bottleImg1],
    price: 29.99,
    originalPrice: 24.99,
    rating: 4.7,
    reviews: 106,
  },
  {
    id: 1,
    title: "3-in-1 Portable Travel Water Bottle",
    image: [bottleImg1],
    price: 29.99,
    originalPrice: 24.99,
    rating: 4.7,
    reviews: 106,
  },{
    id: 1,
    title: "3-in-1 Portable Travel Water Bottle",
    image: [bottleImg1],
    price: 29.99,
    originalPrice: 24.99,
    rating: 4.7,
    reviews: 106,
  },
];

export default function ProductSection() {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-[#000000] text-white font-sans">
        <div className="w-full">
          <img
            src={heroBanner}
            alt="Tail Wagging Banner"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Product Grid */}
        <div className="max-w-[1500px] mx-auto px-8 py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productData.map((product) => (
            <div
              key={product.id}
              className="bg-[#191919] rounded-xl shadow-md hover:shadow-lg transition"
            >
              <Link to={`/product/${product.id}`}>
                {/* Image */}
                <div className="flex justify-center">
                  <img
                    src={product.image[0]}
                    alt="Bottle"
                    className="w-full h-[280px] object-cover rounded-t-xl"
                  />
                </div>
              </Link>

              <div className="p-5">
                {/* Rating */}
                <div className="flex items-center gap-1 text-white my-2 font-semibold">
                  <img src={star} alt="rating" className="pr-2" />
                  {product.rating}/5{" "}
                  <span className="ml-1 text-[#D3B86A]">
                    {product.reviews}
                  </span>
                  <p className="text-sm font-semibold">ratings</p>
                </div>

                {/* Title */}
                <h3 className="text-white text-xl font-semibold pb-2">
                  {product.title}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-2 pb-2">
                  <p className="line-through text-white text-sm">
                    ${product.price.toFixed(2)}
                  </p>
                  <span className="text-xl font-semibold text-[#D3B86A]">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-white mb-4">
                  The bottle is a convenient, pet-themed water bottle designed
                  for dog lovers to stay hydrated on the go.
                </p>

                {/* Add to Cart */}
                <button className="w-full bg-[#D3B86A] text-black py-3 rounded-md font-bold flex items-center justify-center gap-2 cursor-pointer" data-aos="zoom-in">
                  <PiShoppingCartSimpleFill className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

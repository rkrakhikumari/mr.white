import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { IoChatbubble } from "react-icons/io5";
import { TbLogin } from "react-icons/tb";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [active, setActive] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Subscriptions", path: "/subscriptions" },
  ];

  useEffect(() => {
    const currentLink = links.find(link => link.path === location.pathname);
    if (currentLink) {
      setActive(currentLink.name);
    } else {
      setActive("");
    }
  }, [location.pathname]);

  return (
    <nav className="font-work bg-black text-white px-6 py-4 md:px-12 md:py-6 fixed top-0 left-0 w-full  z-50 shadow-md">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        {/* Left side: Logo + Links */}
        <div className="flex items-center gap-24">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <div>
              <h1 className="font-semibold text-lg text-[#D3B86A]">Mr. White</h1>
              <p className="text-xs text-white">Guide to All Paws</p>
            </div>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-10 text-lg">
            {links.map(({ name, path }) => (
              <li key={name} className="cursor-pointer flex items-center gap-2 hover:translate-y-1 transition-transform duration-300 ease-in-out">
                {active === name && (
                  <span className="w-2 h-2 rounded-full bg-[#D3B86A]"></span>
                )}
                <Link
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={active === name ? "text-lg font-semibold " : ""}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-5">
          <Link
          to="/login"
          className="flex items-center gap-1 text-lg hover:translate-y-1 transition-transform duration-300 ease-in-out cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        >
          <TbLogin className="text-lg" />
          Login
        </Link>
          <Link
            to="/contact"
          className="flex items-center gap-2 bg-[#D3B86A] px-6 py-2 rounded-md text-black font-medium hover:translate-y-1 transition-transform duration-300 ease-in-out"
            onClick={() => setIsMenuOpen(false)}
          >
            <IoChatbubble className="text-lg" />
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <HiOutlineX className="w-7 h-7" />
            ) : (
              <HiOutlineMenu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <ul className="flex flex-col gap-4 text-lg">
            {links.map(({ name, path }) => (
              <li key={name} className="cursor-pointer flex items-center gap-2">
                {active === name && (
                  <span className="w-2 h-2 rounded-full bg-[#D3B86A]"></span>
                )}
                <Link
                  to={path}
                  onClick={() => {
                    setActive(name);
                    setIsMenuOpen(false);
                  }}
                  className={active === name ? "text-[#D3B86A] font-semibold" : ""}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3">
            <button className="flex items-center gap-2 text-lg">
              <TbLogin className="w-5 h-5" />
              Login
            </button>
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-[#D3B86A] px-4 py-2 rounded-md text-black font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <IoChatbubble className="text-lg" />
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

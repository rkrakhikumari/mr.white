import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { IoChatbubble } from "react-icons/io5";
import { TbLogin } from "react-icons/tb";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const currentLink = links.find(link => link.path === location.pathname);
    if (currentLink) {
      setActive(currentLink.name);
    } else {
      setActive("");
    }
  }, [location.pathname]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location.pathname]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Subscriptions", path: "/subscriptions" },
  ];

  const dropdownLinks = [
    { name: "Legacy", path: "/legacy" },
    { name: "Product Page", path: "/product-page" },
    { name: "Product Detail", path: "/product/1" }, 
    { name: "Questbook", path: "/quest" },
    { name: "Events", path: "/events" },
    { name: "Way of the Dog", path: "/way-dog" },
    { name: "User Interface", path: "/user-interface" },
  ];

  function handleLogout() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");  
    setIsMenuOpen(false);
  }

  return (
    <nav className="font-work bg-black text-white px-6 py-4 md:px-12 md:py-6 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex items-center justify-between">
        {/* Left side */}
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
          <ul className="hidden md:flex gap-10 text-lg relative">
            {links.map(({ name, path }) => (
              <li key={name} className="cursor-pointer flex items-center gap-2 hover:translate-y-1 transition-transform duration-300 ease-in-out">
                {active === name && <span className="w-2 h-2 rounded-full bg-[#D3B86A]"></span>}
                <Link
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={active === name ? "text-lg font-semibold" : ""}
                >
                  {name}
                </Link>
              </li>
            ))}

            <li className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 hover:translate-y-1 transition-transform duration-300 ease-in-out cursor-pointer"
              >
                More {showDropdown ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {showDropdown && (
                <ul className="absolute bg-black text-white border border-gray-700 shadow-lg mt-2 w-40 rounded-md z-50 transition-all duration-300 ease-in-out">
                  {dropdownLinks.map(({ name, path }) => (
                    <li key={name}>
                      <Link
                        to={path}
                        onClick={() => setShowDropdown(false)}
                        className="block px-4 py-2 hover:bg-gray-800"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-5">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 text-lg hover:translate-y-1 transition-transform duration-300 text-white ease-in-out cursor-pointer px-3 py-1 rounded"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-1 text-lg hover:translate-y-1 transition-transform duration-300 ease-in-out cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              <TbLogin className="text-lg" />
              Login
            </Link>
          )}
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
            {/* Mobile Login/Logout */}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-lg bg-[#D3B86A] px-4 py-2 rounded-md"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <TbLogin className="w-5 h-5" />
                Login
              </Link>
            )}
            
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

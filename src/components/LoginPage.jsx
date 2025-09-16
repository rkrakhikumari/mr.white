import { FaUser, FaLock, FaBolt, FaWallet, FaArrowLeft } from "react-icons/fa";
import logo from "../assets/logoImg.png";
import { useNavigate } from "react-router-dom";

export default function LoginCard() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#000000] relative flex items-center justify-center min-h-screen bg-[radial-gradient(circle, #111 0%, #1a1a1a 100%)]">
      
      {/* Top-left Back Arrow (absolute to screen) */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 text-white hover:text-[#D3B86A] transition cursor-pointer z-50"
        data-aos="fade-left"
      >
        <FaArrowLeft size={25} />
      </button>

      {/* Login Card */}
      <div
        className="relative bg-[#000000] rounded-xl p-8 w-full max-w-sm text-white border border-[#222]"
        style={{
          boxShadow: '0 0 60px rgba(255, 255, 255, 0.08)',
        }}
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <img src={logo} alt="Mr. White" data-aos="zoom-in" />
        </div>

        {/* Username Input */}
        <div className="mb-4">
          <label className="relative flex items-center" data-aos="fade-right">
            <span className="absolute left-3 text-white">
              <FaUser />
            </span>
            <input
              type="text"
              placeholder="Username"
              className="w-full pl-10 py-4 bg-black border border-gray-600 rounded-2xl placeholder-white"
            />
          </label>
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="relative flex items-center" data-aos="fade-right">
            <span className="absolute left-3 text-white">
              <FaLock />
            </span>
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 py-4 bg-black border border-gray-600 rounded-2xl placeholder-white"
            />
          </label>
        </div>

        {/* Links */}
        <div className="flex justify-between text-lg text-white mb-6 underline">
          <a href="#">Sign-up</a>
          <a href="#">Lost your password?</a>
        </div>

        {/* Login Button */}
        <button
          className="flex items-center text-xl justify-center gap-2 w-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white py-3 rounded-md font-semibold transition duration-200"
          data-aos="fade-left"
        >
          <FaBolt className="text-[#D3B86A]" />
          Login
        </button>

        {/* Connect Button */}
        <button
          className="flex items-center text-xl justify-center gap-2 w-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white py-3 mt-4 rounded-md font-semibold transition duration-200"
          data-aos="fade-left"
        >
          <FaWallet className="text-[#D3B86A]" />
          Connect
        </button>
      </div>
    </div>
  );
}

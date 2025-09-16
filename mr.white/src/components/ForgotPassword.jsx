import { useState } from "react";
import { FaEnvelope, FaArrowRight } from "react-icons/fa";
import logo from "../assets/logoImg.png";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../api"; // <-- import your API call

export default function ResetPasswordCard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = async () => {
    setMessage("");
    setError("");

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    try {
      const res = await forgotPassword(email); // call your backend API

      if (res.detail) {
        // backend error
        setError(res.detail);
      } else {
        setMessage(res.msg || "Reset instructions sent to your email!");
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4">
      <div className="bg-[#111] text-white max-w-md w-full rounded-xl p-8 shadow-lg border border-[#222]">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Mr. White" />
        </div>

        {/* Reset Title */}
        <h2 className="text-xl font-semibold text-center mb-4">
          Reset Your Password
        </h2>
        <p className="text-sm text-center text-gray-400 mb-6">
          Enter your email address and we'll send you instructions to reset your
          password.
        </p>

        {/* Email Input */}
        <div className="mb-4 relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
            <FaEnvelope />
          </span>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 py-3 bg-black border border-gray-600 rounded-xl placeholder-white"
          />
        </div>

        {/* Messages */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {message && <p className="text-green-500 text-center mb-4">{message}</p>}

        {/* Back to Login */}
        <div
          onClick={() => navigate("/login")}
          className="text-sm text-[#D3B86A] mb-4 cursor-pointer hover:underline"
        >
          Back to Login
        </div>

        {/* Submit Button */}
        <button
          onClick={handleReset}
          className="flex items-center justify-center gap-2 w-full bg-[#D3B86A] text-black py-3 rounded-md font-semibold transition duration-200 hover:opacity-90"
        >
          <FaArrowRight />
          Send Reset Instructions
        </button>
      </div>
    </div>
  );
}

import {
  FaUser,
  FaLock,
  FaBolt,
  FaWallet,
  FaArrowLeft,
} from "react-icons/fa";
import logo from "../assets/logoImg.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../api"; // 👈 import your API helper

export default function LoginCard() {
  const navigate = useNavigate();

  // Local state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle login
  const handleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const data = await login(username, password);

      if (data?.access_token) {
        // Save token in localStorage
        localStorage.setItem("token", data.access_token);

        // Redirect to home
        navigate("/");
      } else {
        setError(data.detail || "Invalid username or password");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#000000] relative flex items-center justify-center min-h-screen bg-[radial-gradient(circle, #111 0%, #1a1a1a 100%)]">
      {/* Top-left Back Arrow */}
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
          boxShadow: "0 0 60px rgba(255, 255, 255, 0.08)",
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 py-4 bg-black border border-gray-600 rounded-2xl placeholder-white"
            />
          </label>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Links */}
        <div className="flex justify-between text-lg text-white mb-6 underline">
          <a href="/signup">Sign-up</a>
          <a href="/forgot-password">Lost your password?</a>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="flex items-center text-xl justify-center gap-2 w-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white py-3 rounded-md font-semibold transition duration-200 disabled:opacity-50 cursor-pointer"
          data-aos="fade-left"
        >
          <FaBolt className="text-[#D3B86A]" />
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Connect Button */}
        <button
          className="flex items-center text-xl justify-center gap-2 w-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white py-3 mt-4 rounded-md font-semibold transition duration-200 cursor-pointer"
          data-aos="fade-left"
        >
          <FaWallet className="text-[#D3B86A]" />
          Connect
        </button>
      </div>
    </div>
  );
}

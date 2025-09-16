import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaUserPlus,
  FaWallet,
  FaArrowLeft,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import logo from "../assets/logoImg.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signup } from "../api"; // 👈 import your API helper

export default function SignupCard() {
  const navigate = useNavigate();

  // States
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Signup handler
const handleSignup = async () => {
  if (password !== confirmPassword) {
    setError("Passwords do not match");
    return;
  }

  setError("");
  setSuccess("");
  setLoading(true);

  try {
    const data = await signup(username, email, password);
    console.log("Signup response:", data); 

    if (data?.msg?.toLowerCase().includes("success")) {
      setSuccess("Account created successfully!");
      setTimeout(() => navigate("/login"), 1000);
    } else {
      setError(data?.detail || "Signup failed");
    }
  } catch (err) {
    console.error(err);
    setError("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="bg-[#000000] relative flex items-center justify-center min-h-screen bg-[radial-gradient(circle, #111 0%, #1a1a1a 100%)]">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 text-white hover:text-[#D3B86A] transition cursor-pointer z-50"
      >
        <FaArrowLeft size={25} />
      </button>

      {/* Signup Card */}
      <div
        className="relative bg-[#000000] rounded-xl p-8 w-full max-w-md text-white border border-[#222]"
        style={{ boxShadow: "0 0 60px rgba(255, 255, 255, 0.08)" }}
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <img src={logo} alt="Mr. White" />
        </div>

        {/* Username */}
        <div className="mb-4">
          <label className="relative flex items-center">
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

        {/* Email */}
        <div className="mb-4">
          <label className="relative flex items-center">
            <span className="absolute left-3 text-white">
              <FaEnvelope />
            </span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 py-4 bg-black border border-gray-600 rounded-2xl placeholder-white"
            />
          </label>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="relative flex items-center">
            <span className="absolute left-3 text-white">
              <FaLock />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-10 py-4 bg-black border border-gray-600 rounded-2xl placeholder-white"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 text-white cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </label>
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="relative flex items-center">
            <span className="absolute left-3 text-white">
              <FaLock />
            </span>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full pl-10 pr-10 py-4 bg-black border border-gray-600 rounded-2xl placeholder-white"
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 text-white cursor-pointer"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </label>
        </div>

        {/* Error / Success Message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-black text-center mb-4">{success}</p>}

        {/* Already have an account? */}
        <div
          onClick={() => navigate("/login")}
          className="text-md text-center text-[#D3B86A] mb-6 cursor-pointer hover:underline transition"
        >
          Already have an account? <span>Login</span>
        </div>

        {/* Create Account Button */}
        <button
          onClick={handleSignup}
          disabled={loading}
          className="flex items-center text-xl justify-center gap-2 w-full bg-[#D3B86A] text-black py-3 rounded-md font-semibold transition duration-200 hover:opacity-90 disabled:opacity-50 cursor-pointer"
        >
          <FaUserPlus />
          {loading ? "Creating..." : "Create Account"}
        </button>

        {/* Social Connect */}
        <button className="flex items-center text-xl justify-center gap-2 w-full bg-[#2d2f3a] hover:bg-[#3a3a4a] text-white py-3 mt-4 rounded-md font-semibold transition duration-200 cursor-pointer">
          <FaWallet className="text-[#D3B86A]" />
          Connect with Social
        </button>
      </div>
    </div>
  );
}

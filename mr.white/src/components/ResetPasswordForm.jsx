import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../api";

export default function ResetPasswordForm() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async () => {
    setMessage("");
    setError("");

    if (!newPassword || !confirmPassword) {
      setError("Please fill out both fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const res = await resetPassword(token, newPassword);
      if (res.detail) {
        setError(res.detail);
      } else {
        setMessage("Password reset successful. Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4">
      <div className="bg-[#111] text-white max-w-md w-full rounded-xl p-8 shadow-lg border border-[#222]">
        <h2 className="text-xl font-semibold text-center mb-4">
          Set a New Password
        </h2>

        <p className="text-sm text-gray-400 text-center mb-6">
          Enter your new password below.
        </p>

        {/* New Password */}
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full mb-4 px-4 py-3 bg-black border border-gray-600 rounded-xl placeholder-white"
        />

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full mb-4 px-4 py-3 bg-black border border-gray-600 rounded-xl placeholder-white"
        />

        {/* Messages */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {message && <p className="text-green-500 text-center mb-4">{message}</p>}

        <button
          onClick={handleResetPassword}
          className="w-full bg-[#D3B86A] text-black py-3 rounded-md font-semibold transition hover:opacity-90 cursor-pointer"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
}

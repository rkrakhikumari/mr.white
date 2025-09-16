import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProtectedRoute from "./components/ProtectedRoute";
import Hero from "./components/landingPage/Hero";
import AboutPage from "./components/AboutPage";
import Subscriptions from "./components/Subscription";
import ContactPage from "./components/ContactPage";
import LegacyPage from "./components/LegacyPage";
import ProductSection from "./components/ProductSection";
import ProductDetail from "./components/ProductDetail";
import Questbook from "./components/QuestBook";
import EventsPage from "./components/EventsPage";
import WayOfTheDog from "./components/WayDogPage";
import MrWhiteChat from "./components/MrWhiteChat";
import LoginCard from "./components/LoginPage";
import SignupCard from "./components/SignUpPage";
import ResetPasswordCard from "./components/ForgotPassword";
import ResetPasswordForm from "./components/ResetPasswordForm";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const noPaddingRoutes = ["/login", "/signup", "/forgot-password", "/reset-password"];
  const applyPadding = !noPaddingRoutes.includes(location.pathname);

  return (
    <div className={`bg-black text-white min-h-screen overflow-x-hidden ${applyPadding ? "pt-16 sm:pt-20 md:pt-24" : ""}`}>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginCard />} />
        <Route path="/signup" element={<SignupCard />} />
        <Route path="/forgot-password" element={<ResetPasswordCard />} />
        <Route path="/reset-password" element={<ResetPasswordForm />} />

        <Route
          path="/legacy"
          element={
            <ProtectedRoute>
              <LegacyPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product-page"
          element={
            <ProtectedRoute>
              <ProductSection />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <ProductDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quest"
          element={
            <ProtectedRoute>
              <Questbook />
            </ProtectedRoute>
          }
        />
        <Route
          path="/events"
          element={
            <ProtectedRoute>
              <EventsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/way-dog"
          element={
            <ProtectedRoute>
              <WayOfTheDog />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-interface"
          element={
            <ProtectedRoute>
              <MrWhiteChat />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

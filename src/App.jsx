import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/landingPage/Hero";
import AboutPage from "./components/AboutPage";
import Subscriptions from "./components/Subscription";
import ContactPage from "./components/ContactPage";
import LegacyPage from "./components/LegacyPage";
import ProductSection from "./components/ProductSection";
import ProductDetail from "./components/ProductDetail"; 
import Questbook from "./components/QuestBook"
import EventsPage from "./components/EventsPage"
import WayOfTheDog from "./components/WayDogPage"
import LoginCard from "./components/LoginPage"
import MrWhiteChat from "./components/MrWhiteChat";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function App() {

  useEffect(() => {
  AOS.init({ duration: 1000 }); 
}, []);

  return (
<main className="pt-16 sm:pt-20 md:pt-24 bg-black">

<div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/subscriptions" element={<Subscriptions />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginCard />} />

        <Route path="/legacy" element={<LegacyPage />} />
        <Route path="/product-page" element={<ProductSection />} />
        <Route path="/product/:id" element={<ProductDetail />} /> 
        <Route path="/quest" element={<Questbook />} /> 
        <Route path="/events" element={<EventsPage />} />
          <Route path="/way-dog" element={<WayOfTheDog/>} /> 
        <Route path="/user-interface" element={< MrWhiteChat/>} /> 

 



      </Routes>
    </div>
    </main>

  );
}

"use client";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import WhyChooseUs from "@/components/WhyChooseUs";
import PopularDestinations from "@/components/PopularDestinations";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#c7a34b] flex flex-col items-center justify-center py-6 px-2">
      <div className="w-full max-w-6xl rounded-3xl bg-[#FFFAFA] shadow-xl p-6 sm:p-10 flex flex-col gap-10 border-4 border-[#c7a34b]">
        <header className="sticky top-0 z-50 bg-[#252525] shadow-lg flex items-center justify-between px-6 py-3 border-b-4 border-[#c7a34b] rounded-xl">
          <div className="flex items-center gap-3 rounded-xl px-3 py-2">
            <Image src="/favicon.ico" alt="Odyssey Sri Lanka Logo" width={40} height={40} className="h-10 w-10 rounded-full object-cover border-2 border-[#c7a34b]" priority />
            <span className="font-extrabold text-xl text-[#c7a34b] tracking-wide drop-shadow">Odyssey Sri Lanka</span>
          </div>
          {/* Hamburger menu for screens below 930px */}
          <button
            className="max-[930px]:flex hidden flex-col justify-center items-center w-10 h-10 rounded focus:outline-none border-2 border-[#c7a34b]"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-[#c7a34b] mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#c7a34b] mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#c7a34b] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
          <nav className={`flex gap-6 text-lg font-semibold max-[930px]:hidden ${menuOpen ? 'max-[930px]:flex flex-col absolute top-full left-0 w-full bg-black border-t-4 border-[#c7a34b] px-6 py-4' : ''} transition-all duration-300`}>
            <a href="#hero" className="text-[#c7a34b] hover:text-white transition">Home</a>
            <a href="#why-us" className="text-[#c7a34b] hover:text-white transition">Why Us</a>
            <a href="#popular-destinations" className="text-[#c7a34b] hover:text-white transition">Destinations</a>
            <a href="#about" className="text-[#c7a34b] hover:text-white transition">About</a>
            <a href="#contact" className="text-[#c7a34b] hover:text-white transition">Contact</a>
          </nav>
        </header>
        <section id="hero" className="flex flex-col gap-8">
          <HeroSlider />
          <div className="flex flex-col items-center gap-2 bg-white rounded-2xl shadow-lg p-6 border-4 border-[#c7a34b]">
            <h1 className={`antialiased text-4xl sm:text-6xl font-extrabold text-black text-center drop-shadow-lg tracking-tight`}>
              Discover Your Dream Sri Lanka Holiday
            </h1>
            <p className="text-xl sm:text-2xl text-black text-center font-semibold mt-2">
              All-Inclusive Travel Tailored to You, No Hidden Costs
            </p>
            <p className="text-base text-black text-center max-w-2xl mt-2">
              {"Experience the magic of Sri Lanka with Odyssey Sri Lanka and Master Campers Lanka. Our expertly crafted holiday packages promise stress-free travel, immersive adventures, and local expertise at every step. Whether you seek all-inclusive ease, knowledgeable guides, or a tailor-made journey, we guarantee a truly unforgettable Sri Lankan escape."}
            </p>
            <a href="#contact" className="mt-4 px-8 py-3 bg-[#c7a34b] hover:bg-black active:bg-gray-700 text-black hover:text-[#c7a34b] rounded-full font-bold text-lg shadow-lg transition-all duration-200 btn-floating self-center border-2 border-black">
              Start Customizing
            </a>
            <hr className="w-50% border-[#c7a34b] my-5 opacity-50" />
          </div>
        </section>
        <WhyChooseUs />
        <PopularDestinations />
        <AboutUs />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}

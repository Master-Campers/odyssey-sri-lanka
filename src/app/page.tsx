"use client";
import HeroSlider from "@/components/HeroSlider";
import WhyChooseUs from "@/components/WhyChooseUs";
import PopularDestinations from "@/components/PopularDestinations";
import Testimonials from "@/components/Testimonials";
import WhySriLanka from "@/components/WhySriLanka";
import HowItWorks from "@/components/HowItWorks";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-yellow-100 flex flex-col items-center justify-center py-6 px-2">
      <div className="w-full max-w-6xl rounded-3xl bg-white/90 shadow-xl p-6 sm:p-10 flex flex-col gap-10">
        <header className="sticky top-0 z-50 bg-black shadow-lg backdrop-blur flex items-center justify-between px-6 py-3 border-b border-yellow-600 rounded-xl">
          <div className="flex items-center gap-3 rounded-xl px-3 py-2">
            <img src="/Logo/odyssey-logo.jpeg" alt="Odyssey Sri Lanka Logo" className="h-10 w-10 rounded-full object-cover border-2 border-yellow-500" />
            <span className="font-extrabold text-xl text-yellow-500 tracking-wide drop-shadow">Odyssey Sri Lanka</span>
          </div>
          <nav className="flex gap-6 text-lg font-semibold">
            <a href="#hero" className="text-yellow-500 hover:text-yellow-400 transition">Home</a>
            <a href="#why-us" className="text-yellow-500 hover:text-yellow-400 transition">Why Us</a>
            <a href="#destinations" className="text-yellow-500 hover:text-yellow-400 transition">Destinations</a>
            <a href="#about" className="text-yellow-500 hover:text-yellow-400 transition">About</a>
            <a href="#contact" className="text-yellow-500 hover:text-yellow-400 transition">Contact</a>
          </nav>
        </header>
        <section id="hero" className="flex flex-col gap-8">
          <HeroSlider />
          <div className="flex flex-col items-center gap-2 bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 text-center drop-shadow-lg tracking-tight">
              Discover Your Dream Sri Lanka Holiday
            </h1>
            <p className="text-xl sm:text-2xl text-gray-800 text-center font-semibold mt-2">
              All-Inclusive Travel Tailored to You, No Hidden Costs
            </p>
            <p className="text-base text-gray-700 text-center max-w-2xl mt-2">
              {"Experience the magic of Sri Lanka with Odyssey Sri Lanka and Master Campers Lanka. Our expertly crafted holiday packages promise stress-free travel, immersive adventures, and local expertise at every step. Whether you seek all-inclusive ease, knowledgeable guides, or a tailor-made journey, we guarantee a truly unforgettable Sri Lankan escape."}
            </p>
            <a href="#contact" className="mt-4 px-8 py-3 bg-gray-900 hover:bg-gray-800 active:bg-gray-700 text-white rounded-full font-bold text-lg shadow-lg transition-all duration-200 btn-floating self-center">
              Start Customizing
            </a>
            <hr className="w-50% border-gray-200 my-5 opacity-50" />
          </div>
        </section>
        <WhyChooseUs />
        <PopularDestinations />

        <AboutUs />
        <Testimonials />
        <HowItWorks />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}

"use client";
import HeroSlider from "@/components/HeroSlider";
import WhyChooseUs from "@/components/WhyChooseUs";
import PopularDestinations from "@/components/PopularDestinations";
import Testimonials from "@/components/Testimonials";
import WhySriLanka from "@/components/WhySriLanka";
import CustomizeTour from "@/components/CustomizeTour";
import HowItWorks from "@/components/HowItWorks";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#d3d2c7] flex flex-col items-center justify-center py-6 px-2">
      <div className="w-full max-w-6xl rounded-3xl bg-white/90 shadow-xl p-6 sm:p-10 flex flex-col gap-10">
        <section id="hero" className="flex flex-col gap-8">
          <HeroSlider />
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 text-center">
              Your Personalized Sri Lanka Vacation Awaits
            </h1>
            <p className="text-lg sm:text-2xl text-gray-800 text-center">
              All-Inclusive Travel Tailored to You, No Hidden Costs
            </p>
            <p className="text-base text-gray-700 text-center max-w-2xl mt-2">
              All-inclusive pricing covers flights, accommodations, meals, and guided tours.
            </p>
            <a href="#contact" className="mt-4 px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-bold text-lg shadow">
              Start Customizing
            </a>
          </div>
        </section>
        <WhyChooseUs />
        <PopularDestinations />
        <Testimonials />
        <WhySriLanka />
        {/* <CustomizeTour /> */}
        <HowItWorks />
        <AboutUs />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}

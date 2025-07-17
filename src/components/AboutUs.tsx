import Image from "next/image";

export default function AboutUs() {
    return (
        <section id="about" className="flex flex-col gap-8 py-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#c7a34b] text-center mb-4 drop-shadow-lg">About Our Sri Lanka Adventures</h2>
            <div className="grid grid-cols-1 md:grid-cols-auto gap-4">
                <div className="bg-[#252525] rounded-xl p-8 flex flex-col items-center text-center shadow-lg border-4 border-[#c7a34b]">
                    <Image
                        src="/Icons/commit-svgrepo-com.svg"
                        alt="Our Commitment"
                        width={32}
                        height={32}
                        className="icon-feature w-15 h-15 mb-4"
                    />
                    <h3 className="font-bold text-xl text-[#c7a34b] mb-2">Our Commitment</h3>
                    <p className="text-[#c7a34b] text-base leading-relaxed">{"At Odyssey Sri Lanka, our commitment is to deliver an unparalleled, stress-free holiday experience tailored to your unique desires. From the moment you arrive, we handle every detail curating personalized itineraries, securing expert local guides, and selecting the finest accommodations and experiences. Our dedicated team ensures seamless comfort, authentic adventures, and lasting memories, promising you the ultimate Sri Lanka luxury tour that you’ll rave about for years to come."}</p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8 border-4 border-[#c7a34b] gap-4 flex flex-col items-center text-center">
                    <h2 className="font-extrabold text-2xl text-[#c7a34b] mb-2">Our History</h2>
                    <p className="text-black text-xl text-center leading-relaxed">
                        {"The Odyssey Sri Lanka story began with a passion for the wild, deeply rooted in our sister company,"} <a href="https://mastercamperslanka.com" target="_blank" rel="noopener noreferrer"><u>Master Campers Lanka</u></a>. {"What started as thrilling safari game drives in Udawalawe National Park & Yala National Park among a group of friends, swiftly evolved into all-inclusive glamping services for adventure seekers. Then We started our next project Bundala Nature Lodge by Master Campers Lanka. This hands-on experience in delivering exceptional outdoor adventures laid the groundwork for our expansion into luxury travel in Sri Lanka."} <br /><br />

                        {"In 2012, with a new vision We began crafting customized luxury holidays to Sri Lanka, offering discerning tourists an unparalleled way to explore our island. Since then, Odyssey Sri Lanka has blossomed from a dedicated small team into one of Sri Lanka's most trusted custom travel specialists."} <br /><br />

                        {"Our mission remains clear: to deliver unforgettable Sri Lanka journeys that beautifully showcase the island's breathtaking beauty, rich culture, and renowned warm hospitality. We're committed to promoting sustainable tourism in Sri Lanka and fostering community-focused travel, ensuring every adventure benefits both our guests and local communities. We're incredibly proud to have guided thousands of travelers, helping them experience the authentic essence of Sri Lanka in a truly personal and impactful way."}
                    </p>
                    <div className="flex flex-row justify-center gap-8 mt-4">
                        <div className="flex flex-col items-center">
                            <span className="font-extrabold text-3xl text-[#c7a34b]">12+</span>
                            <span className="text-black">Years in Business</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="font-extrabold text-3xl text-[#c7a34b]">850+</span>
                            <span className="text-black">Custom Tours Organized</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="font-extrabold text-3xl text-[#c7a34b]">3,200+</span>
                            <span className="text-black">Happy Travelers</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

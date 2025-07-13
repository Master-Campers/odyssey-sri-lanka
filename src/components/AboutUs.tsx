import Image from "next/image";

export default function AboutUs() {
    return (
        <section id="about" className="flex flex-col gap-8">
            <h2 className="heading-lg">About Our Sri Lanka Adventures</h2>
            <div className="grid grid-cols-1 md:grid-cols-auto gap-4">
                <div className="card">
                    <Image
                        src="/Icons/commit-svgrepo-com.svg"
                        alt="Our Commitment"
                        width={32}
                        height={32}
                        className="icon-feature w-15 h-15"
                    />
                    <h3 className="card-title">Our Commitment</h3>
                    <p className="text-muted">{"At Odyssey Sri Lanka, our commitment is to deliver an unparalleled, stress-free holiday experience tailored to your unique desires. From the moment you arrive, we handle every detail curating personalized itineraries, securing expert local guides, and selecting the finest accommodations and experiences. Our dedicated team ensures seamless comfort, authentic adventures, and lasting memories, promising you the ultimate Sri Lanka luxury tour that you’ll rave about for years to come."}</p>
                </div>
                {/*<div className="card">
                    <span className="icon-feature">🌟</span>
                    <h3 className="card-title">Our Mission</h3>
                    <p className="text-muted">Delivering unforgettable, all-inclusive custom travel experiences</p>
                    </div>
                    <div className="card">
                    <span className="icon-feature">👥</span>
                    <h3 className="card-title">Our Team</h3>
                    <p className="text-muted">Passionate experts in Sri Lankan culture and travel</p>
                    </div>
                    <div className="card-lg mt-4">
                    <span className="font-bold text-lg mb-2 text-gray-900">Meet Our Team</span>
                    <div className="about-team-avatars">
                    <div className="about-team-avatar" />
                    <div className="about-team-avatar" />
                    <div className="about-team-avatar" />
                    </div>
                    <p className="text-muted">We&apos;re a team of passionate locals dedicated to making your Sri Lanka adventure unforgettable.</p>
                    </div>*/}
                <div className="card-lg gap-4">
                    <h2 className="heading-lg">Our History</h2>
                    <p className="about-text">
                        {"Odyssey Sri Lanka's story had begun in 2012 by a group of passionate locals who wanted to share the magic of their homeland with the world. Over the years, we've grown from a small team to one of Sri Lanka's most trusted custom travel specialists. Our mission is to deliver unforgettable, all-inclusive journeys that celebrate the island's beauty, culture, and hospitality. We believe in sustainable, community-focused tourism and are proud to have helped thousands of travelers experience Sri Lanka in a truly personal way."}
                    </p>
                    <div className="about-stats">
                        <div className="about-stat">
                            <span className="about-stat-number">12+</span>
                            <span className="text-muted">Years in Business</span>
                        </div>
                        <div className="about-stat">
                            <span className="about-stat-number">850+</span>
                            <span className="text-muted">Custom Tours Organized</span>
                        </div>
                        <div className="about-stat">
                            <span className="about-stat-number">3,200+</span>
                            <span className="text-muted">Happy Travelers</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

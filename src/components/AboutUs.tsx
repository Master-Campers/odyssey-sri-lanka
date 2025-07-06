export default function AboutUs() {
    return (
        <section id="about" className="flex flex-col gap-8">
            <h2 className="heading-lg">About Our Sri Lanka Adventures</h2>
            <div className="card-lg gap-4">
                <p className="about-text">
                    Odyssey Sri Lanka was founded in 2012 by a group of passionate locals who wanted to share the magic of their homeland with the world. Over the years, we've grown from a small team to one of Sri Lanka's most trusted custom travel specialists. Our mission is to deliver unforgettable, all-inclusive journeys that celebrate the island's beauty, culture, and hospitality. We believe in sustainable, community-focused tourism and are proud to have helped thousands of travelers experience Sri Lanka in a truly personal way.
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="card">
                    <span className="icon-feature">🌟</span>
                    <h3 className="card-title">Our Mission</h3>
                    <p className="text-muted">Delivering unforgettable, all-inclusive custom travel experiences</p>
                </div>
                <div className="card">
                    <span className="icon-feature">👥</span>
                    <h3 className="card-title">Our Team</h3>
                    <p className="text-muted">Passionate experts in Sri Lankan culture and travel</p>
                </div>
                <div className="card">
                    <span className="icon-feature">🌱</span>
                    <h3 className="card-title">Our Commitment</h3>
                    <p className="text-muted">Sustainable, community-focused tourism</p>
                </div>
            </div>
            <div className="card-lg mt-4">
                <span className="font-bold text-lg mb-2 text-gray-900">Meet Our Team</span>
                <div className="about-team-avatars">
                    <div className="about-team-avatar" />
                    <div className="about-team-avatar" />
                    <div className="about-team-avatar" />
                </div>
                <p className="text-muted">We’re a team of passionate locals dedicated to making your Sri Lanka adventure unforgettable.</p>
            </div>
        </section>
    );
}

export default function WhyChooseUs() {
    return (
        <section id="why-us" className="flex flex-col gap-6">
            <h2 className="heading-lg">Why Travel with Us?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="card">
                    <span className="icon-feature">💼</span>
                    <h3 className="card-title">All-Inclusive Convenience</h3>
                    <p className="text-muted">
                        One price covers flights, accommodations, meals, transport, and guided tours
                    </p>
                </div>
                <div className="card">
                    <span className="icon-feature">🧑‍🦱</span>
                    <h3 className="card-title">Expert Local Guides</h3>
                    <p className="text-muted">
                        Authentic experiences with knowledgeable Sri Lankan guides
                    </p>
                </div>
                <div className="card">
                    <span className="icon-feature">🛠️</span>
                    <h3 className="card-title">Fully Customizable Itineraries</h3>
                    <p className="text-muted">
                        Crafted to your unique preferences, from adventure to relaxation
                    </p>
                </div>
                <div className="card">
                    <span className="icon-feature">🌱</span>
                    <h3 className="card-title">Sustainable Travel</h3>
                    <p className="text-muted">
                        Eco-friendly practices supporting local communities
                    </p>
                </div>
            </div>
            {/* Expanded breakdown section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="card">
                    <span className="icon-feature-sm">🤝</span>
                    <h4 className="card-title-sm">Our Promise</h4>
                    <p className="text-muted">
                        Personalized support from planning to return, with 24/7 local assistance and transparent pricing.
                    </p>
                </div>
                <div className="card">
                    <span className="icon-feature-sm">⭐</span>
                    <h4 className="card-title-sm">What Sets Us Apart</h4>
                    <p className="text-muted">
                        Handpicked experiences, boutique stays, and exclusive access to hidden gems across Sri Lanka.
                    </p>
                </div>
                <div className="card">
                    <span className="icon-feature-sm">🧑‍💼</span>
                    <h4 className="card-title-sm">Meet Our Team</h4>
                    <p className="text-muted">
                        A passionate team of travel experts and local hosts dedicated to making your journey unforgettable.
                    </p>
                </div>
            </div>
        </section>
    );
}

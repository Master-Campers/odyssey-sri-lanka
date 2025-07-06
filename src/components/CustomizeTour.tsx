export default function CustomizeTour() {
    return (
        <section id="customize" className="flex flex-col gap-6">
            <h2 className="heading-lg">Build Your Perfect Sri Lanka Adventure</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="card">
                    <span className="icon-feature">🎯</span>
                    <h3 className="card-title">Your Vision, Our Expertise</h3>
                    <p className="text-muted">Tell us your interests, and we’ll design your dream itinerary</p>
                </div>
                <div className="card">
                    <span className="icon-feature">🔀</span>
                    <h3 className="card-title">Endless Possibilities</h3>
                    <p className="text-muted">Mix and match cultural, beach, wildlife, and adventure experiences</p>
                </div>
                <div className="card">
                    <span className="icon-feature">🤝</span>
                    <h3 className="card-title">Personalized Support</h3>
                    <p className="text-muted">Work with our travel experts to refine your plan</p>
                </div>
            </div>
            {/* Interactive form/quiz placeholder */}
            <div className="card-lg mt-4">
                <span className="font-bold text-lg mb-2 text-gray-900">Customize Your Tour</span>
                <form className="flex flex-col gap-3 w-full max-w-md">
                    <input className="input" placeholder="Your interests (e.g. beaches, culture)" />
                    <input className="input" placeholder="Duration (days)" />
                    <input className="input" placeholder="Budget (USD)" />
                    <button className="btn-primary mt-2">Start Planning</button>
                </form>
            </div>
        </section>
    );
}

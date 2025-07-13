export default function HowItWorks() {
    return (
        <section id="how-it-works" className="flex flex-col gap-6">
            <h2 className="heading-lg">Your Custom Journey, Simplified</h2>
            <div className="how-steps">
                <div className="how-step">
                    <span className="icon-feature">📝</span>
                    <span className="how-step-title">Step 1</span>
                    <span className="text-muted text-center">Share Your Interests</span>
                </div>
                <span className="how-arrow">→</span>
                <div className="how-step">
                    <span className="icon-feature">🗺️</span>
                    <span className="how-step-title">Step 2</span>
                    <span className="text-muted text-center">We Craft Your Itinerary</span>
                </div>
                <span className="how-arrow">→</span>
                <div className="how-step">
                    <span className="icon-feature">💳</span>
                    <span className="how-step-title">Step 3</span>
                    <span className="text-muted text-center">Book with Ease</span>
                </div>
                <span className="how-arrow">→</span>
                <div className="how-step">
                    <span className="icon-feature">🌴</span>
                    <span className="how-step-title">Step 4</span>
                    <span className="text-muted text-center">Enjoy Sri Lanka</span>
                </div>
            </div>
        </section>
    );
}

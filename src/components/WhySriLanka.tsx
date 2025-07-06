export default function WhySriLanka() {
    return (
        <section id="why-sri-lanka" className="flex flex-col gap-6">
            <h2 className="heading-lg">Why Sri Lanka?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="card">
                    <span className="icon-feature">🏖️</span>
                    <h3 className="card-title">Pristine Beaches</h3>
                    <p className="text-muted">Golden sands and turquoise waters in Unawatuna, Mirissa, and Bentota</p>
                </div>
                <div className="card">
                    <span className="icon-feature">🏯</span>
                    <h3 className="card-title">Rich Cultural Heritage</h3>
                    <p className="text-muted">Ancient temples, UNESCO World Heritage Sites like Sigiriya and Kandy</p>
                </div>
                <div className="card">
                    <span className="icon-feature">🦁</span>
                    <h3 className="card-title">Diverse Wildlife</h3>
                    <p className="text-muted">Safari adventures in Yala and Udawalawe National Parks</p>
                </div>
                <div className="card">
                    <span className="icon-feature">🍃</span>
                    <h3 className="card-title">Lush Tea Plantations</h3>
                    <p className="text-muted">Scenic beauty and tea-tasting in Nuwara Eliya</p>
                </div>
                <div className="card">
                    <span className="icon-feature">🏄‍♂️</span>
                    <h3 className="card-title">Adventure & Wellness</h3>
                    <p className="text-muted">Surfing, hiking, and Ayurveda retreats</p>
                </div>
            </div>
            {/* Interactive map placeholder */}
            <div className="card-lg mt-4">
                <span className="font-bold text-lg mb-2 text-gray-900">Explore Sri Lanka</span>
                <div className="w-full h-48 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">[Interactive Map Coming Soon]</div>
            </div>
        </section>
    );
}

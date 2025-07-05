export default function WhySriLanka() {
  return (
    <section id="why-sri-lanka" className="flex flex-col gap-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
        Why Sri Lanka?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="rounded-2xl bg-white shadow p-6 flex flex-col items-center text-center">
          <span className="text-gray-900 text-3xl mb-2">🏖️</span>
          <h3 className="font-bold text-lg mb-1 text-gray-900">Pristine Beaches</h3>
          <p className="text-gray-700 text-sm">Golden sands and turquoise waters in Unawatuna, Mirissa, and Bentota</p>
        </div>
        <div className="rounded-2xl bg-white shadow p-6 flex flex-col items-center text-center">
          <span className="text-gray-900 text-3xl mb-2">🏯</span>
          <h3 className="font-bold text-lg mb-1 text-gray-900">Rich Cultural Heritage</h3>
          <p className="text-gray-700 text-sm">Ancient temples, UNESCO World Heritage Sites like Sigiriya and Kandy</p>
        </div>
        <div className="rounded-2xl bg-white shadow p-6 flex flex-col items-center text-center">
          <span className="text-gray-900 text-3xl mb-2">🦁</span>
          <h3 className="font-bold text-lg mb-1 text-gray-900">Diverse Wildlife</h3>
          <p className="text-gray-700 text-sm">Safari adventures in Yala and Udawalawe National Parks</p>
        </div>
        <div className="rounded-2xl bg-white shadow p-6 flex flex-col items-center text-center">
          <span className="text-gray-900 text-3xl mb-2">🍃</span>
          <h3 className="font-bold text-lg mb-1 text-gray-900">Lush Tea Plantations</h3>
          <p className="text-gray-700 text-sm">Scenic beauty and tea-tasting in Nuwara Eliya</p>
        </div>
        <div className="rounded-2xl bg-white shadow p-6 flex flex-col items-center text-center">
          <span className="text-gray-900 text-3xl mb-2">🏄‍♂️</span>
          <h3 className="font-bold text-lg mb-1 text-gray-900">Adventure & Wellness</h3>
          <p className="text-gray-700 text-sm">Surfing, hiking, and Ayurveda retreats</p>
        </div>
      </div>
      {/* Interactive map placeholder */}
      <div className="rounded-2xl bg-white shadow p-8 flex flex-col items-center text-center mt-4">
        <span className="font-bold text-lg mb-2 text-gray-900">Explore Sri Lanka</span>
        <div className="w-full h-48 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">[Interactive Map Coming Soon]</div>
      </div>
    </section>
  );
}

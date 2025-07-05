export default function CustomizeTour() {
  return (
    <section id="customize" className="flex flex-col gap-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
        Build Your Perfect Sri Lanka Adventure
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-2xl bg-white shadow p-6 flex flex-col items-center text-center">
          <span className="text-gray-900 text-3xl mb-2">🎯</span>
          <h3 className="font-bold text-lg mb-1 text-gray-900">Your Vision, Our Expertise</h3>
          <p className="text-gray-700 text-sm">Tell us your interests, and we’ll design your dream itinerary</p>
        </div>
        <div className="rounded-2xl bg-white shadow p-6 flex flex-col items-center text-center">
          <span className="text-gray-900 text-3xl mb-2">🔀</span>
          <h3 className="font-bold text-lg mb-1 text-gray-900">Endless Possibilities</h3>
          <p className="text-gray-700 text-sm">Mix and match cultural, beach, wildlife, and adventure experiences</p>
        </div>
        <div className="rounded-2xl bg-white shadow p-6 flex flex-col items-center text-center">
          <span className="text-gray-900 text-3xl mb-2">🤝</span>
          <h3 className="font-bold text-lg mb-1 text-gray-900">Personalized Support</h3>
          <p className="text-gray-700 text-sm">Work with our travel experts to refine your plan</p>
        </div>
      </div>
      {/* Interactive form/quiz placeholder */}
      <div className="rounded-2xl bg-white shadow p-8 flex flex-col items-center text-center mt-4">
        <span className="font-bold text-lg mb-2 text-gray-900">Customize Your Tour</span>
        <form className="flex flex-col gap-3 w-full max-w-md">
          <input className="rounded-full border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 bg-white" placeholder="Your interests (e.g. beaches, culture)" />
          <input className="rounded-full border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 bg-white" placeholder="Duration (days)" />
          <input className="rounded-full border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 bg-white" placeholder="Budget (USD)" />
          <button className="mt-2 px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-bold">Start Planning</button>
        </form>
      </div>
    </section>
  );
}

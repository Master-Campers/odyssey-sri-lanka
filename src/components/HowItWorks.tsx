export default function HowItWorks() {
  return (
    <section id="how-it-works" className="flex flex-col gap-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
        Your Custom Journey, Simplified
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="flex flex-col items-center">
          <span className="text-3xl text-gray-900">📝</span>
          <span className="font-bold mt-2 text-gray-900">Step 1</span>
          <span className="text-gray-700 text-sm text-center">Share Your Interests</span>
        </div>
        <span className="hidden md:block text-2xl text-gray-400">→</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl text-gray-900">🗺️</span>
          <span className="font-bold mt-2 text-gray-900">Step 2</span>
          <span className="text-gray-700 text-sm text-center">Craft Your Itinerary</span>
        </div>
        <span className="hidden md:block text-2xl text-gray-400">→</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl text-gray-900">💳</span>
          <span className="font-bold mt-2 text-gray-900">Step 3</span>
          <span className="text-gray-700 text-sm text-center">Book with Ease</span>
        </div>
        <span className="hidden md:block text-2xl text-gray-400">→</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl text-gray-900">🌴</span>
          <span className="font-bold mt-2 text-gray-900">Step 4</span>
          <span className="text-gray-700 text-sm text-center">Enjoy Sri Lanka</span>
        </div>
      </div>
    </section>
  );
}

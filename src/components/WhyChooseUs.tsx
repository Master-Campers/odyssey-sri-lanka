export default function WhyChooseUs() {
  return (
    <section id="why-us" className="flex flex-col gap-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
        Why Travel with Us?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="rounded-2xl bg-white shadow p-6 flex flex-col items-center text-center">
          <span className="text-gray-900 text-3xl mb-2">💼</span>
          <h3 className="font-bold text-lg mb-1 text-gray-900">
            All-Inclusive Convenience
          </h3>
          <p className="text-gray-700 text-sm">
            One price covers flights, accommodations, meals, transport, and guided tours
          </p>
        </div>
        <div className="rounded-2xl bg-white shadow p-6 flex flex-col items-center text-center">
          <span className="text-gray-900 text-3xl mb-2">🧑‍🦱</span>
          <h3 className="font-bold text-lg mb-1 text-gray-900">
            Expert Local Guides
          </h3>
          <p className="text-gray-700 text-sm">
            Authentic experiences with knowledgeable Sri Lankan guides
          </p>
        </div>
        <div className="rounded-2xl bg-white shadow p-6 flex flex-col items-center text-center">
          <span className="text-gray-900 text-3xl mb-2">🛠️</span>
          <h3 className="font-bold text-lg mb-1 text-gray-900">
            Fully Customizable Itineraries
          </h3>
          <p className="text-gray-700 text-sm">
            Crafted to your unique preferences, from adventure to relaxation
          </p>
        </div>
        <div className="rounded-2xl bg-white shadow p-6 flex flex-col items-center text-center">
          <span className="text-gray-900 text-3xl mb-2">🌱</span>
          <h3 className="font-bold text-lg mb-1 text-gray-900">
            Sustainable Travel
          </h3>
          <p className="text-gray-700 text-sm">
            Eco-friendly practices supporting local communities
          </p>
        </div>
      </div>
    </section>
  );
}

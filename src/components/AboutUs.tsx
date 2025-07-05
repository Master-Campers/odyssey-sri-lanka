export default function AboutUs() {
  return (
    <section id="about" className="flex flex-col gap-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
        About Our Sri Lanka Adventures
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-2xl bg-white shadow p-6 flex flex-col items-center text-center">
          <span className="text-gray-900 text-3xl mb-2">🌟</span>
          <h3 className="font-bold text-lg mb-1 text-gray-900">Our Mission</h3>
          <p className="text-gray-700 text-sm">Delivering unforgettable, all-inclusive custom travel experiences</p>
        </div>
        <div className="rounded-2xl bg-white shadow p-6 flex flex-col items-center text-center">
          <span className="text-gray-900 text-3xl mb-2">👥</span>
          <h3 className="font-bold text-lg mb-1 text-gray-900">Our Team</h3>
          <p className="text-gray-700 text-sm">Passionate experts in Sri Lankan culture and travel</p>
        </div>
        <div className="rounded-2xl bg-white shadow p-6 flex flex-col items-center text-center">
          <span className="text-gray-900 text-3xl mb-2">🌱</span>
          <h3 className="font-bold text-lg mb-1 text-gray-900">Our Commitment</h3>
          <p className="text-gray-700 text-sm">Sustainable, community-focused tourism</p>
        </div>
      </div>
      <div className="rounded-2xl bg-white shadow p-8 flex flex-col items-center text-center mt-4">
        <span className="font-bold text-lg mb-2 text-gray-900">Meet Our Team</span>
        <div className="flex gap-4 mb-2">
          <div className="w-16 h-16 rounded-full bg-gray-300" />
          <div className="w-16 h-16 rounded-full bg-gray-300" />
          <div className="w-16 h-16 rounded-full bg-gray-300" />
        </div>
        <p className="text-gray-700 text-sm">We’re a team of passionate locals dedicated to making your Sri Lanka adventure unforgettable.</p>
      </div>
    </section>
  );
}

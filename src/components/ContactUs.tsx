export default function ContactUs() {
  return (
    <section id="contact" className="flex flex-col gap-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Get in Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-2xl bg-white shadow p-6 flex flex-col items-center text-center">
          <span className="text-gray-900 text-3xl mb-2">📧</span>
          <h3 className="font-bold text-lg mb-1 text-gray-900">Reach Out</h3>
          <p className="text-gray-700 text-sm">Email, phone, and live chat options</p>
        </div>
        <div className="rounded-2xl bg-white shadow p-6 flex flex-col items-center text-center">
          <span className="text-gray-900 text-3xl mb-2">🌐</span>
          <h3 className="font-bold text-lg mb-1 text-gray-900">Follow Us</h3>
          <p className="text-gray-700 text-sm">Instagram, Facebook, X</p>
        </div>
        <div className="rounded-2xl bg-white shadow p-6 flex flex-col items-center text-center">
          <span className="text-gray-900 text-3xl mb-2">🏢</span>
          <h3 className="font-bold text-lg mb-1 text-gray-900">Visit Us</h3>
          <p className="text-gray-700 text-sm">Office address (if applicable)</p>
        </div>
      </div>
      <div className="rounded-2xl bg-white shadow p-8 flex flex-col items-center text-center mt-4 gap-3">
        <span className="font-bold text-lg mb-2 text-gray-900">Contact Form</span>
        <form className="flex flex-col gap-3 w-full max-w-md">
          <input className="rounded-full border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 bg-white" placeholder="Your name" />
          <input className="rounded-full border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 bg-white" placeholder="Your email" />
          <textarea className="rounded-2xl border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 bg-white" placeholder="Your message" rows={3} />
          <button className="mt-2 px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-bold">Send Message</button>
        </form>
        <span className="font-bold text-lg mt-4 text-gray-900">Newsletter Signup</span>
        <form className="flex gap-2 w-full max-w-md">
          <input className="rounded-full border border-gray-300 px-4 py-2 flex-1 text-gray-900 placeholder-gray-500 bg-white" placeholder="Your email" />
          <button className="px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-bold">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

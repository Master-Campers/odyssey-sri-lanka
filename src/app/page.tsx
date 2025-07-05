import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-blue-100 to-white p-0">
      <header className="w-full flex flex-col items-center py-10 bg-white/80 shadow-md">
        <Image
          src="/odyssey-logo.svg"
          alt="Odyssey Sri Lanka Logo"
          width={120}
          height={120}
          className="mb-4"
        />
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-2 text-center drop-shadow">
          Odyssey Sri Lanka
        </h1>
        <p className="text-lg sm:text-xl text-blue-700 text-center max-w-2xl">
          Discover the beauty, culture, and adventure of Sri Lanka with curated
          travel experiences and expert guides.
        </p>
      </header>
      <main className="flex-1 w-full flex flex-col items-center justify-center px-4 py-12 gap-10">
        <section className="max-w-3xl w-full flex flex-col items-center gap-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-800 text-center">
            Why Travel with Odyssey?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <Image
                src="/beach.svg"
                alt="Beaches"
                width={48}
                height={48}
              />
              <h3 className="font-bold text-blue-700 mt-4 mb-2">
                Stunning Beaches
              </h3>
              <p className="text-gray-600 text-center text-sm">
                Relax on pristine beaches and enjoy the tropical paradise of
                Sri Lanka’s coastline.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <Image
                src="/temple.svg"
                alt="Culture"
                width={48}
                height={48}
              />
              <h3 className="font-bold text-blue-700 mt-4 mb-2">
                Rich Culture
              </h3>
              <p className="text-gray-600 text-center text-sm">
                Explore ancient temples, vibrant festivals, and the unique
                heritage of the island.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <Image
                src="/adventure.svg"
                alt="Adventure"
                width={48}
                height={48}
              />
              <h3 className="font-bold text-blue-700 mt-4 mb-2">
                Adventure Awaits
              </h3>
              <p className="text-gray-600 text-center text-sm">
                From hiking lush mountains to wildlife safaris, adventure is
                around every corner.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-800">
            Plan Your Journey
          </h2>
          <a
            href="#contact"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-full shadow transition"
          >
            Contact Us
          </a>
        </section>
      </main>
      <footer className="w-full py-6 flex flex-col items-center bg-blue-900 text-white text-sm gap-2">
        <span>
          &copy; {new Date().getFullYear()} Odyssey Sri Lanka. All rights
          reserved.
        </span>
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Facebook
          </a>
          <a
            href="mailto:info@odysseysrilanka.com"
            className="hover:underline"
          >
            Email
          </a>
        </div>
      </footer>
    </div>
  );
}

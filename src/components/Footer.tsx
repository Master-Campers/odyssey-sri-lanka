export default function Footer() {
    return (
        <footer className="w-full flex flex-col items-center gap-2 mt-10 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900">
                Plan Your Custom Sri Lankan Adventure Today
            </h3>
            <nav className="flex flex-wrap gap-4 text-sm text-gray-900">
                <a href="#customize" className="hover:underline">
                    Customize Your Tour
                </a>
                <a href="#why-sri-lanka" className="hover:underline">
                    Why Sri Lanka
                </a>
                <a href="#about" className="hover:underline">
                    About
                </a>
                <a href="#contact" className="hover:underline">
                    Contact
                </a>
            </nav>
            <div className="flex gap-4 mt-2">
                <a
                    href="https://wa.me/+94777129683"
                    className="hover:underline text-xl text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/001-whatsapp.png"
                        alt="WhatsApp"
                        style={{ width: 24, height: 24 }}
                    />
                </a>
                <a
                    href="https://www.facebook.com/share/1AmvCtJ6p3/?mibextid=wwXIfr"
                    className="hover:underline text-xl text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/007-facebook-1.png"
                        alt="Facebook"
                        style={{ width: 24, height: 24 }}
                    />
                </a>
                <a
                    href="#"
                    className="hover:underline text-xl text-gray-900 flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/tripadvisor-icon.png"
                        alt="TripAdvisor"
                        style={{ width: 24, height: 24 }}
                    />
                </a>
                <a
                    href="https://www.instagram.com/odyssey_srilanka?igsh=OHBwYzdqMHFwbW9n"
                    className="hover:underline text-xl text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/004-instagram.png"
                        alt="Instagram"
                        style={{ width: 24, height: 24 }}
                    />
                </a>
                <a
                    href="mailto:info@odysseysrilanka.com"
                    className="hover:underline text-xl text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/002-email.png"
                        alt="Email"
                        style={{ width: 24, height: 24 }}
                    />
                </a>
            </div>
            <a
                href="#customize"
                className="mt-2 px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-bold text-lg shadow"
            >
                Start Planning
            </a>
            <hr className="w-full border-gray-300 my-4" />
            <span className="text-xs text-gray-500 mt-2">
                &copy; {new Date().getFullYear()} Odyssey Sri Lanka. All rights
                reserved.
            </span>
        </footer>
    );
}

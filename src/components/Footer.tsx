export default function Footer() {
    return (
        <footer className="w-full flex flex-col items-center gap-2 mt-10 pt-6 border-t border-gray-200 text-center">
            <h3 className="heading-lg">
                Plan Your Custom Sri Lankan Adventure Today
            </h3>
            <nav className="footer-nav">
                <a href="#customize" className="footer-link">
                    Customize Your Tour
                </a>
                <a href="#why-sri-lanka" className="footer-link">
                    Why Sri Lanka
                </a>
                <a href="#about" className="footer-link">
                    About
                </a>
                <a href="#contact" className="footer-link">
                    Contact
                </a>
            </nav>
            <div className="footer-social">
                <a
                    href="https://wa.me/+94777129683"
                    className="footer-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/001-whatsapp.png"
                        alt="WhatsApp"
                        className="footer-social-img"
                    />
                </a>
                <a
                    href="https://www.facebook.com/share/1AmvCtJ6p3/?mibextid=wwXIfr"
                    className="footer-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/007-facebook-1.png"
                        alt="Facebook"
                        className="footer-social-img"
                    />
                </a>
                <a
                    href="#"
                    className="footer-social-link flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/tripadvisor-icon.png"
                        alt="TripAdvisor"
                        className="footer-social-img"
                    />
                </a>
                <a
                    href="https://www.instagram.com/odyssey_srilanka?igsh=OHBwYzdqMHFwbW9n"
                    className="footer-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/004-instagram.png"
                        alt="Instagram"
                        className="footer-social-img"
                    />
                </a>
                <a
                    href="mailto:info@odysseysrilanka.com"
                    className="footer-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/002-email.png"
                        alt="Email"
                        className="footer-social-img"
                    />
                </a>
            </div>
            <a
                href="#customize"
                className="btn-primary mt-2 text-lg shadow inline-block"
            >
                Start Planning
            </a>
            <hr className="w-full border-gray-300 my-4" />
            <span className="text-xs text-gray-500 mt-2 block">
                &copy; {new Date().getFullYear()} Odyssey Sri Lanka. All rights
                reserved.
            </span>
        </footer>
    );
}

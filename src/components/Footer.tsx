import Image from "next/image";
import { Link } from "react-scroll";

export default function Footer() {
    return (
        <footer id="footer" className="w-full flex flex-col items-center gap-2 mt-10 pt-6 border-t border-gray-200 text-center">
            <h3 className="heading-lg">
                Plan Your Custom Sri Lankan Adventure Today
            </h3>
            <nav className="footer-nav">
                <Link
                    to="why-sri-lanka"
                    duration={500}
                    className="footer-link">
                    Why Sri Lanka
                </Link>
                <Link
                    to="about"
                    duration={500}
                    className="footer-link">
                    About
                </Link>
                <Link
                    to="contact"
                    duration={500}
                    className="footer-link">
                    Contact
                </Link>
            </nav>
            <div className="footer-social">
                <Link
                    to="https://wa.me/+94777129683"
                    className="footer-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/001-whatsapp.png"
                        alt="WhatsApp"
                        width={24}
                        height={24}
                        className="footer-social-img"
                    />
                </Link>
                <Link
                    to="https://www.facebook.com/share/1AmvCtJ6p3/?mibextid=wwXIfr"
                    className="footer-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/007-facebook-1.png"
                        alt="Facebook"
                        width={24}
                        height={24}
                        className="footer-social-img"
                    />
                </Link>
                <Link
                    to="#"
                    className="footer-social-link flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/tripadvisor-icon.png"
                        alt="TripAdvisor"
                        width={24}
                        height={24}
                        className="footer-social-img"
                    />
                </Link>
                <Link
                    to="https://www.instagram.com/odyssey_srilanka?igsh=OHBwYzdqMHFwbW9n"
                    className="footer-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/004-instagram.png"
                        alt="Instagram"
                        width={24}
                        height={24}
                        className="footer-social-img"
                    />
                </Link>
            </div>
            <hr className="w-full border-gray-300 my-4" />
            <span className="text-xs text-gray-500 mt-2 block">
                &copy; {new Date().getFullYear()} Odyssey Sri Lanka. All rights
                reserved.
            </span>
        </footer>
    );
}

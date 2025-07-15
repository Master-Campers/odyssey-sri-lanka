import Image from "next/image";

export default function Footer() {
    return (
        <footer id="footer" className="w-full flex flex-col items-center gap-2 mt-10 pt-6 border-t border-gray-200 text-center">
            <h3 className="heading-lg">
                Plan Your Custom Sri Lankan Adventure Today!
            </h3>
            <nav className="footer-nav">
                <a href="#popular-destinations" className="footer-link">Why Sri Lanka</a>
                <a href="#about" className="footer-link">About</a>
                <a href="#contact" className="footer-link">Contact</a>
            </nav>
            <div className="footer-social">
                <a
                    href="https://wa.me/+94777129683"
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
                </a>
                <a
                    href="https://www.facebook.com/share/1AmvCtJ6p3/?mibextid=wwXIfr"
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
                </a>
                <a
                    href="https://www.tripadvisor.com/Hotel_Review-g674587-d3439580-Reviews-Master_Campers-Udawalawe_National_Park.html?m=19905"
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
                </a>
                <a
                    href="https://www.instagram.com/odyssey_srilanka?igsh=OHBwYzdqMHFwbW9n"
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
                </a>
            </div>
            <hr className="w-full border-gray-300 my-4" />
            <span className="text-xs text-gray-500 mt-2 block">
                &copy; {new Date().getFullYear()} Odyssey Sri Lanka. All rights
                reserved.
            </span>
        </footer>
    );
}

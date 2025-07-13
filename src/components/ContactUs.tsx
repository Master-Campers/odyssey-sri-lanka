import React, { useState, useRef } from "react";
import Image from "next/image";
import { Link } from "react-scroll";

export default function ContactUs() {
    // Month dropdown for arrival
    const [arrivalMonth, setArrivalMonth] = useState("");
    // Generate month options for current and next 12 months
    const getMonthOptions = () => {
        const options = [];
        const now = new Date();
        for (let i = 0; i < 13; i++) {
            const date = new Date(now.getFullYear(), now.getMonth() + i, 1);
            const value = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
            const label = date.toLocaleString("default", { month: "long", year: "numeric" });
            options.push({ value, label });
        }
        return options;
    };
    const monthOptions = getMonthOptions();
    const formRef = useRef<HTMLFormElement>(null);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        // Let the form submit to FormBold, but reset fields after submit
        setTimeout(() => {
            if (formRef.current) {
                formRef.current.reset();
            }
            setSubmitted(true);
        }, 100);
    };

    React.useEffect(() => {
        if (submitted) {
            setTimeout(() => {
                window.location.href = "/";
            }, 2000); // 2 seconds after submit
        }
    }, [submitted]);

    return (
        <section id="contact" className="flex flex-col gap-6">
            <h2 className="heading-lg">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card">
                    <span className="icon-feature">
                        <Image
                            src="/Icons/mail-open-minus-svgrepo-com.svg"
                            alt="Reach Out"
                            width={32}
                            height={32}
                            className="inline w-15 h-15"
                            priority
                        />
                    </span>
                    <h3 className="card-title">Reach Out</h3>
                    <p className="text-muted">Email, phone, and Social Media.</p>
                </div>
                <Link
                    to="footer"
                    spy={true}
                    className="card cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-600"
                >
                    <span className="icon-feature">
                        <Image
                            src="/Icons/hashtag-svgrepo-com.svg"
                            alt="Follow Us"
                            width={32}
                            height={32}
                            className="inline w-15 h-15"
                            priority
                        />
                    </span>
                    <h3 className="card-title">Follow Us</h3>
                    <p className="text-muted">Instagram and Facebook.</p>
                </Link>
            </div>
            <div className="card mt-6 w-full max-w-2xl mx-auto">
                <h3 className="card-title mb-6">Contact form for Custom Tours</h3>
                <form
                    ref={formRef}
                    action="https://formbold.com/s/3VX2Q"
                    method="POST"
                    className="flex flex-col gap-4 w-full"
                    autoComplete="on"
                    onSubmit={handleSubmit}
                >
                    <input
                        name="email"
                        type="email"
                        required
                        className="input flex-1"
                        placeholder="Your email (required)"
                        aria-label="Email"
                    />
                    <div className="flex flex-col sm:flex-row gap-4 w-full items-center">
                        <input
                            name="name"
                            className="input flex-1"
                            placeholder="Your name"
                            aria-label="Name"
                            autoComplete="name"
                        />
                        <input
                            name="pax"
                            type="number"
                            min="1"
                            step="1"
                            className="input flex-1"
                            placeholder="Number of Guests"
                            aria-label="Number of Guests"
                            autoComplete="off"
                        />
                    </div>
                    <textarea
                        name="message"
                        className="textarea"
                        placeholder="Your message"
                        rows={3}
                        aria-label="Message"
                    />
                    <div className="flex flex-col gap-2 w-full">
                        <label className="label">Month of Arrival (Required)</label>
                        <div className="relative">
                            <select
                                name="arrival_month"
                                className="input appearance-none pr-10"
                                value={arrivalMonth}
                                onChange={e => setArrivalMonth(e.target.value)}
                                required
                            >
                                <option value="" disabled>Select month</option>
                                {monthOptions.map(opt => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 8L10 12L14 8" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label className="label">Interests</label>
                        <div className="grid grid-cols-3 sm:grid-cols-auto gap-2 text-left w-full">
                            <label className="text-black flex items-center gap-2"><input type="checkbox" name="interests" value="beaches" className="checkbox" /> Beaches</label>
                            <label className="text-black flex items-center gap-2"><input type="checkbox" name="interests" value="wildlife" className="checkbox" /> Wildlife</label>
                            <label className="text-black flex items-center gap-2"><input type="checkbox" name="interests" value="culture" className="checkbox" /> Culture</label>
                            <label className="text-black flex items-center gap-2"><input type="checkbox" name="interests" value="adventure" className="checkbox" /> Adventure</label>
                            <label className="text-black flex items-center gap-2"><input type="checkbox" name="interests" value="food" className="checkbox" /> Food</label>
                            <label className="text-black flex items-center gap-2"><input type="checkbox" name="interests" value="wellness" className="checkbox" /> Other</label>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label className="label">Budget (USD)</label>
                        <div className="flex gap-2 w-full">
                            <input
                                name="budget"
                                type="number"
                                min="0"
                                step="100"
                                className="input flex-1"
                                placeholder="Your budget (USD)"
                                aria-label="Budget"
                            />
                        </div>
                    </div>
                    {/* Extra info message box */}
                    <div className="flex flex-col gap-2 w-full">
                        <label className="label text-gray-700">If there is any extra information you want to share to help us to serve you better</label>
                        <textarea
                            name="extra_info"
                            className="textarea"
                            placeholder="Any special requests, accessibility needs, or details about your ideal trip? (optional)"
                            rows={3}
                            aria-label="Extra Information"
                        />
                    </div>
                    {/* FormBold reCAPTCHA integration */}
                    <div data-formbold-recaptcha="true"></div>
                    <button type="submit" className="w-full sm:w-auto mt-4 bg-gray-900 hover:bg-gray-800 active:bg-gray-700 text-white rounded-full font-bold text-lg shadow-lg transition-all duration-200 btn-floating px-8 py-3">Send Message</button>
                </form>
            </div>
        </section>
    );
}

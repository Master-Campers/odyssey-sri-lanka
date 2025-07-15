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
        <section id="contact" className="flex flex-col gap-6 py-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#c7a34b] text-center mb-4 drop-shadow-lg">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#252525] rounded-xl p-8 flex flex-col items-center text-center shadow-lg border-4 border-[#c7a34b]">
                    <span className="icon-feature mb-4">
                        <Image
                            src="/Icons/mail-open-minus-svgrepo-com.svg"
                            alt="Reach Out"
                            width={32}
                            height={32}
                            className="inline w-15 h-15"
                            priority
                        />
                    </span>
                    <h3 className="font-bold text-xl text-[#c7a34b] mb-2">Reach Out</h3>
                    <p className="text-[#c7a34b] text-base leading-relaxed">Email, phone, and Social Media.</p>
                </div>
                <Link
                    to="footer"
                    spy={true}
                    className="bg-[#252525] rounded-xl p-8 flex flex-col items-center text-center shadow-lg border-4 border-[#c7a34b] cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-600"
                >
                    <span className="icon-feature mb-4">
                        <Image
                            src="/Icons/hashtag-svgrepo-com.svg"
                            alt="Follow Us"
                            width={32}
                            height={32}
                            className="inline w-15 h-15"
                            priority
                        />
                    </span>
                    <h3 className="font-bold text-xl text-[#c7a34b] mb-2">Follow Us</h3>
                    <p className="text-[#c7a34b] text-base leading-relaxed">Instagram and Facebook.</p>
                </Link>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border-4 border-[#c7a34b] w-full max-w-2xl mx-auto flex flex-col gap-6">
                <h3 className="font-bold text-2xl text-[#c7a34b] mb-2">Contact form for Custom Tours</h3>
                <form
                    ref={formRef}
                    action="https://formbold.com/s/3VX2Q"
                    method="POST"
                    className="flex flex-col gap-4 w-full text-[#c7a34b]"
                    autoComplete="on"
                    onSubmit={handleSubmit}
                >
                    <input
                        name="email"
                        type="email"
                        required
                        className="input flex-1 focus:border-[#c7a34b] focus:ring-2 focus:ring-[#c7a34b]"
                        placeholder="Your email (required)"
                        aria-label="Email"
                    />
                    <div className="flex flex-col sm:flex-row gap-4 w-full items-center">
                        <input
                            name="name"
                            className="input flex-1 focus:border-[#c7a34b] focus:ring-2 focus:ring-[#c7a34b]"
                            placeholder="Your name"
                            aria-label="Name"
                            autoComplete="name"
                        />
                        <input
                            name="pax"
                            type="number"
                            min="1"
                            step="1"
                            className="input flex-1 focus:border-[#c7a34b] focus:ring-2 focus:ring-[#c7a34b]"
                            placeholder="Number of Guests"
                            aria-label="Number of Guests"
                            autoComplete="off"
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex gap-4 w-full items-center">
                            <div className="relative flex-1">
                                <label className="label text-[#c7a34b] font-semibold mb-1 block">Month of Arrival</label>
                                <select
                                    name="arrival_month"
                                    className="input appearance-none pr-10 bg-white border-2 border-[#c7a34b] text-[#c7a34b] rounded-xl focus:border-[#c7a34b] focus:ring-2 focus:ring-[#c7a34b]"
                                    value={arrivalMonth}
                                    onChange={e => setArrivalMonth(e.target.value)}
                                    required
                                >
                                    <option value="" disabled className="text-gray-400">Select month</option>
                                    {monthOptions.map(opt => (
                                        <option key={opt.value} value={opt.value} className="text-[#c7a34b] bg-white">{opt.label}</option>
                                    ))}
                                </select>
                                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#c7a34b]">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 8L10 12L14 8" stroke="#c7a34b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                            <div className="flex-1">
                                <label className="label text-[#c7a34b] font-semibold mb-1 block">Number of Days</label>
                                <input
                                    name="num_days"
                                    type="number"
                                    min="1"
                                    max="30"
                                    className="input w-full border-2 border-[#c7a34b] text-[#c7a34b] rounded-xl focus:border-[#c7a34b] focus:ring-2 focus:ring-[#c7a34b]"
                                    placeholder="Number of Days"
                                    aria-label="Number of Days"
                                    autoComplete="off"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label className="label text-[#c7a34b] font-semibold">Interests</label>
                        <div className="grid grid-cols-3 sm:grid-cols-auto gap-2 text-left w-full">
                            <label className="text-black flex items-center gap-2 font-semibold"><input type="checkbox" name="interests" value="beaches" className="checkbox accent-[#c7a34b]" /> Beaches</label>
                            <label className="text-black flex items-center gap-2 font-semibold"><input type="checkbox" name="interests" value="wildlife" className="checkbox accent-[#c7a34b]" /> Wildlife</label>
                            <label className="text-black flex items-center gap-2 font-semibold"><input type="checkbox" name="interests" value="culture" className="checkbox accent-[#c7a34b]" /> Culture</label>
                            <label className="text-black flex items-center gap-2 font-semibold"><input type="checkbox" name="interests" value="adventure" className="checkbox accent-[#c7a34b]" /> Adventure</label>
                            <label className="text-black flex items-center gap-2 font-semibold"><input type="checkbox" name="interests" value="food" className="checkbox accent-[#c7a34b]" /> Food</label>
                            <label className="text-black flex items-center gap-2 font-semibold"><input type="checkbox" name="interests" value="wellness" className="checkbox accent-[#c7a34b]" /> Other</label>
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
                    <button type="submit" className="w-full bg-[#c7a34b] hover:bg-black active:bg-gray-700 text-black hover:text-[#c7a34b] rounded-full font-bold text-lg shadow-lg transition-all duration-200 btn-floating self-center border-2 border-black">Send Message</button>
                </form>
            </div>
        </section>
    );
}

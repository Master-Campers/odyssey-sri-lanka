import React, { useState, useRef } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Image from "next/image";
import { Link } from "react-scroll";

export default function ContactUs() {
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const formRef = useRef<HTMLFormElement>(null);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        // Let the form submit to FormBold, but reset fields after submit
        setTimeout(() => {
            if (formRef.current) {
                formRef.current.reset();
            }
            setRange([
                {
                    startDate: new Date(),
                    endDate: new Date(),
                    key: "selection",
                },
            ]);
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
        <section id="contact" className="flex flex-col gap-8">
            <h2 className="heading-lg">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="card-lg flex flex-col items-stretch">
                    <Image
                        src="/Icons/mail-open-minus-svgrepo-com.svg"
                        alt="Visit Us Icon"
                        width={32}
                        height={32}
                        className="icon-feature w-15 h-15"
                    />
                    <h3 className="font-bold heading-md mb-1 text-gray-900">Reach Out</h3>
                    <p className="text-muted">Email, phone, and live chat options</p>
                </div>
                <Link
                    to="footer"
                    spy={true}
                    className="card-lg flex flex-col items-stretch cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-600"
                >
                    <Image
                        src="/Icons/hashtag-svgrepo-com.svg"
                        alt="Visit Us Icon"
                        width={32}
                        height={32}
                        className="icon-feature w-15 h-15"
                    />
                    <h3 className="font-bold heading-md mb-1 text-gray-900">Follow Us</h3>
                    <p className="text-muted">Instagram, Facebook, X</p>
                </Link>
            </div>
            <div className="card-lg mt-4 gap-6 w-full max-w-2xl mx-auto">
                <span className="font-bold text-xl mb-2 text-gray-900">Contact & Custom Tour Form</span>
                <form
                    ref={formRef}
                    action="https://formbold.com/s/3VX2Q"
                    method="POST"
                    className="flex flex-col gap-4 w-full"
                    autoComplete="on"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col sm:flex-row gap-4 w-full items-center">
                        <input
                            name="email"
                            type="email"
                            required
                            className="input flex-1"
                            placeholder="Your email (required)"
                            aria-label="Email"
                        />
                        <input
                            name="name"
                            className="input flex-1"
                            placeholder="Your name"
                            aria-label="Name"
                            autoComplete="name"
                        />
                    </div>
                    <input
                        name="subject"
                        className="input"
                        placeholder="Subject"
                        aria-label="Subject"
                        autoComplete="off"
                    />
                    <textarea
                        name="message"
                        className="textarea"
                        placeholder="Type your message"
                        rows={3}
                        required
                        aria-label="Message"
                    />
                    <div className="flex flex-col gap-2 w-full">
                        <label className="label">Interests</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-left w-full">
                            <label className="text-black flex items-center gap-2"><input type="checkbox" name="interests" value="beaches" className="checkbox" /> Beaches</label>
                            <label className="text-black flex items-center gap-2"><input type="checkbox" name="interests" value="wildlife" className="checkbox" /> Wildlife</label>
                            <label className="text-black flex items-center gap-2"><input type="checkbox" name="interests" value="culture" className="checkbox" /> Culture</label>
                            <label className="text-black flex items-center gap-2"><input type="checkbox" name="interests" value="adventure" className="checkbox" /> Adventure</label>
                            <label className="text-black flex items-center gap-2"><input type="checkbox" name="interests" value="food" className="checkbox" /> Food</label>
                            <label className="text-black flex items-center gap-2"><input type="checkbox" name="interests" value="luxury" className="checkbox" /> Luxury</label>
                            <label className="text-black flex items-center gap-2"><input type="checkbox" name="interests" value="family" className="checkbox" /> Family</label>
                            <label className="text-black flex items-center gap-2"><input type="checkbox" name="interests" value="honeymoon" className="checkbox" /> Honeymoon</label>
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
                    {/* Hidden fields for date range */}
                    <input type="hidden" name="start_date" value={range[0].startDate.toISOString().split("T")[0]} />
                    <input type="hidden" name="end_date" value={range[0].endDate.toISOString().split("T")[0]} />
                    {/* FormBold reCAPTCHA integration */}
                    <div data-formbold-recaptcha="true"></div>
                    <div className="flex flex-col gap-2 w-full mt-6">
                        <label className="label">Preferred Travel Dates</label>
                        <div className="flex flex-col items-center w-full date-picker">
                            <DateRange
                                editableDateInputs={true}
                                onChange={item => {
                                    const selection = item.selection;
                                    setRange([{
                                        startDate: selection.startDate ?? new Date(),
                                        endDate: selection.endDate ?? new Date(),
                                        key: "selection",
                                    }]);
                                }}
                                moveRangeOnFirstSelection={false}
                                ranges={range}
                                rangeColors={["#16a34a"]}
                                className="rounded-xl shadow w-full max-w-xs"
                                minDate={new Date()}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn-primary btn-floating w-full sm:w-auto mt-4">Send Message</button>
                </form>
            </div>
        </section>
    );
}

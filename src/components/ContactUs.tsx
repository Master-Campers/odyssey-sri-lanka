import React from "react";

export default function ContactUs() {
    return (
        <section id="contact" className="flex flex-col gap-8">
            <h2 className="heading-lg">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="card flex flex-col items-stretch">
                    <span className="text-gray-900 text-3xl mb-2 self-stretch">{/* <-- full width */}📧</span>
                    <h3 className="font-bold text-lg mb-1 text-gray-900">Reach Out</h3>
                    <p className="text-muted">Email, phone, and live chat options</p>
                </div>
                <div className="card flex flex-col items-stretch">
                    <span className="text-gray-900 text-3xl mb-2 self-stretch">🌐</span>
                    <h3 className="font-bold text-lg mb-1 text-gray-900">Follow Us</h3>
                    <p className="text-muted">Instagram, Facebook, X</p>
                </div>
                <div className="card flex flex-col items-stretch">
                    <span className="text-gray-900 text-3xl mb-2 self-stretch">🏢</span>
                    <h3 className="font-bold text-lg mb-1 text-gray-900">Visit Us</h3>
                    <p className="text-muted">Office address (if applicable)</p>
                </div>
            </div>
            <div className="card-lg mt-4 gap-6 w-full max-w-2xl mx-auto">
                <span className="font-bold text-xl mb-2 text-gray-900">Contact & Custom Tour Form</span>
                <form
                    name="custom-contact"
                    method="POST"
                    data-netlify="true"
                    className="flex flex-col gap-4 w-full"
                >
                    <input type="hidden" name="form-name" value="custom-contact" className="input-hidden" />
                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                        <input name="name" required className="input flex-1" placeholder="Your name" />
                        <input name="email" type="email" required className="input flex-1" placeholder="Your email" />
                    </div>
                    <textarea name="message" className="textarea" placeholder="Your message" rows={3} />
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
                            <input name="budget" type="number" min="0" step="100" className="input flex-1" placeholder="Your budget (USD)" />
                        </div>
                    </div>
                    <button type="submit" className="btn-primary w-full sm:w-auto mt-2">Send Message</button>
                </form>
                <span className="font-bold text-lg mt-4 text-gray-900">Newsletter Signup</span>
                <form
                    name="newsletter"
                    method="POST"
                    data-netlify="true"
                    className="flex flex-col sm:flex-row gap-2 w-full max-w-md"
                >
                    <input type="hidden" name="form-name" value="newsletter" className="input-hidden" />
                    <input name="email" type="email" required className="input flex-1" placeholder="Your email" />
                    <button type="submit" className="btn-primary w-full sm:w-auto">Subscribe</button>
                </form>
            </div>
        </section>
    );
}

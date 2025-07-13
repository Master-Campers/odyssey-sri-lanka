import Image from "next/image";

const whyChooseUs = [
    {
        icon: (
            <Image
                src="/Icons/white-map-location-pin-svgrepo-com.svg"
                alt="All-Inclusive Convenience"
                width={32}
                height={32}
                className="inline w-15 h-15"
                priority
            />
        ),
        title: `All-Inclusive Convenience`,
        description: `Enjoy complete peace of mind from the moment you arrive. Our all-inclusive packages cover airport pickup, attraction visits, entrance tickets, safaris, boat trips, and almost all meals—leaving you free to relax and savor every moment.`
    },
    {
        icon: <Image
            src="/Icons/white-user-expert-svgrepo-com.svg"
            alt="Expert Local Guides"
            width={32}
            height={32}
            className="inline w-14 h-14"
            priority
        />,
        title: `Expert Local Guides`,
        description: `Travel with confidence alongside expert chauffeur-guides and specialist local experts. Our handpicked team ensures insightful, respectful, and authentic experiences—whether exploring ancient ruins or embarking on wildlife safaris.`
    },
    {
        icon: <Image
            src="/Icons/white-note-edit-svgrepo-com.svg"
            alt="Fully Customizable Itineraries"
            width={32}
            height={32}
            className="inline w-15 h-15"
            priority
        />,
        title: `Fully Customizable Itineraries`,
        description: `Every traveler is unique. We design fully personalized itineraries to match your preferences, style, and budget. From family adventures to romantic getaways, your perfect Sri Lankan holiday is crafted just for you.`
    },
    {
        icon: <Image
            src="/Icons/white-handshake-fill-svgrepo-com.svg"
            alt="Our Promise"
            width={32}
            height={32}
            className="inline w-16 h-16"
            priority
        />,
        title: `Our Promise`,
        description: `We are dedicated to providing you with the best Sri Lankan holiday experience possible. We ensure that every detail of your journey exceeds your expectations, so you return home with unforgettable memories and stories you’ll be eager to share with everyone you know.`
    },
    {
        icon: <Image
            src="/Icons/white-star-sharp-svgrepo-com.svg"
            alt="What Sets Us Apart"
            width={32}
            height={32}
            className="inline w-15 h-15"
            priority
        />,
        title: `What Sets Us Apart`,
        description: `We’re not just planners—we’re explorers. Our team personally experiences and selects accommodations, activities, and hidden gems across Sri Lanka, ensuring every detail is exceptional and tailored to you.`
    },
];
/*{
    icon: <Image
        src="/Icons/man-outline-svgrepo-com.svg"
        alt="Meet Our Team"
        width={32}
        height={32}
        className="inline w-15 h-15"
        priority
    />,
    title: `Meet Our Team`,
    description: `Our passionate, locally based team brings you authentic insight and genuine care. We travel with our guests, turning every journey into a personalized adventure and ensuring your Sri Lankan holiday is truly extraordinary.`
}*/

export default function WhyChooseUs() {
    return (
        <section id="why-us" className="flex flex-col gap-8 py-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-500 text-center mb-4 drop-shadow-lg">Why Travel with Us?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-auto gap-8">
                {whyChooseUs.map((item, idx) => {
                    // Center the last item if it's alone in the last row
                    const isLast = idx === whyChooseUs.length - 1;
                    const isOdd = whyChooseUs.length % 2 !== 0;
                    return (
                        <div
                            className={`bg-black rounded-xl p-8 flex flex-col items-center text-center shadow-lg${isLast && isOdd ? " sm:col-span-2 sm:justify-center" : ""}`}
                            key={item.title}
                        >
                            <span className="icon-feature mb-4">{item.icon}</span>
                            <h3 className="font-bold text-xl text-yellow-500 mb-2">{item.title}</h3>
                            <p className="text-yellow-500 text-base leading-relaxed">{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

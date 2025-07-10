import Image from "next/image";

const whyChooseUs = [
    {
        icon: (
            <Image
                src="/Icons/map-location-pin-svgrepo-com.svg"
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
            src="/Icons/user-expert-svgrepo-com.svg"
            alt="Expert Local Guides"
            width={32}
            height={32}
            className="inline w-15 h-15"
            priority
        />,
        title: `Expert Local Guides`,
        description: `Travel with confidence alongside expert chauffeur-guides and specialist local experts. Our handpicked team ensures insightful, respectful, and authentic experiences—whether exploring ancient ruins or embarking on wildlife safaris.`
    },
    {
        icon: <Image
            src="/Icons/note-edit-svgrepo-com.svg"
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
            src="/Icons/handshake-fill-svgrepo-com.svg"
            alt="Our Promise"
            width={32}
            height={32}
            className="inline w-15 h-15"
            priority
        />,
        title: `Our Promise`,
        description: `We are dedicated to providing you with the best Sri Lankan holiday experience possible. We ensure that every detail of your journey exceeds your expectations, so you return home with unforgettable memories and stories you’ll be eager to share with everyone you know.`
    },
    {
        icon: <Image
            src="/Icons/star-sharp-svgrepo-com.svg"
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
        <section id="why-us" className="flex flex-col gap-6">
            <h2 className="heading-lg">Why Travel with Us?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-auto gap-6">
                {whyChooseUs.map((item, idx) => {
                    // Center the last item if it's alone in the last row
                    const isLast = idx === whyChooseUs.length - 1;
                    const isOdd = whyChooseUs.length % 2 !== 0;
                    return (
                        <div
                            className={`card${isLast && isOdd ? " sm:col-span-2 sm:justify-center" : ""}`}
                            key={item.title}
                        >
                            <span className="icon-feature">{item.icon}</span>
                            <h3 className="card-title">{item.title}</h3>
                            <p className="text-muted">{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

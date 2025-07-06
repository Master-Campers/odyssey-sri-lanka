import Image from "next/image";

const destinations = [
    {
        name: "Sigiriya Rock Fortress",
        image: "/images/destinations/sigiriya.jpg",
        description: "Climb the iconic Lion Rock and discover ancient frescoes, gardens, and breathtaking views.",
    },
    {
        name: "Ella & Nine Arches Bridge",
        image: "/images/destinations/ella.jpg",
        description: "Experience lush tea country, scenic train rides, and the famous Nine Arches Bridge.",
    },
    {
        name: "Galle Fort",
        image: "/images/destinations/galle.jpg",
        description: "Wander the UNESCO-listed Dutch fort, vibrant streets, and oceanfront ramparts.",
    },
    {
        name: "Yala National Park",
        image: "/images/destinations/yala.jpg",
        description: "Go on safari to spot leopards, elephants, and diverse wildlife in Sri Lanka's top park.",
    },
    {
        name: "Kandy & Temple of the Tooth",
        image: "/images/destinations/kandy.jpg",
        description: "Visit the sacred Temple of the Tooth and enjoy the cultural capital's lakeside charm.",
    },
    {
        name: "Mirissa Beach",
        image: "/images/destinations/mirissa.jpg",
        description: "Relax on golden sands, surf, or go whale watching in this laid-back beach town.",
    },
];

export default function PopularDestinations() {
    return (
        <section id="popular-destinations" className="flex flex-col gap-6 mt-10">
            <h2 className="heading-lg">Popular Travel Destinations in Sri Lanka</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {destinations.map((dest) => (
                    <div key={dest.name} className="card overflow-hidden">
                        <div className="relative w-full h-48 mb-3">
                            <Image
                                src={dest.image}
                                alt={dest.name}
                                fill
                                className="img-destination"
                                sizes="(max-width: 768px) 100vw, 33vw"
                                priority={true}
                            />
                        </div>
                        <h3 className="card-title">{dest.name}</h3>
                        <p className="text-muted">{dest.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

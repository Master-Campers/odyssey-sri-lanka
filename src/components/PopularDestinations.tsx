import Image from "next/image";

const destinations = [
    {
        name: "Sigiriya Rock Fortress",
        image: "/destinations/Sigiriya.jpg",
        description: "Climb the iconic Lion Rock and discover ancient frescoes, gardens, and breathtaking views.",
    },
    {
        name: "Ella & Nine Arches Bridge",
        image: "/destinations/Ella.jpg",
        description: "Experience lush tea country, scenic train rides, and the famous Nine Arches Bridge.",
    },
    {
        name: "Galle Fort",
        image: "/destinations/galle.jpeg",
        description: "Wander the UNESCO-listed Dutch fort, vibrant streets, and oceanfront ramparts.",
    },
    {
        name: "Yala National Park",
        image: "/destinations/Yala.jpg",
        description: "Go on safari to spot leopards, elephants, and diverse wildlife in Sri Lanka's top park.",
    },
    {
        name: "Udawalawe National Park",
        image: "/destinations/Udawalawe.jpeg",//change this image later
        description: "Udawalawe National Park is renowned for its large elephant population and diverse wildlife.",
    },
    {
        name: "Beaches of Sri Lanka",
        image: "/destinations/Beach.jpg",
        description: "Relax on golden sands, surf, or go whale watching in this laid-back beach town.",
    },
];

export default function PopularDestinations() {
    return (
        <section id="popular-destinations" className="flex flex-col gap-6 mt-10 py-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#c7a34b] text-center mb-4 drop-shadow-lg">Popular Travel Destinations in Sri Lanka</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {destinations.map((dest) => (
                    <div key={dest.name} className="bg-[#252525] rounded-xl p-6 flex flex-col items-center text-center shadow-lg border-4 border-[#c7a34b] overflow-hidden">
                        <div className="relative w-full h-48 mb-3">
                            <Image
                                src={dest.image}
                                alt={dest.name}
                                fill
                                className="img-destination rounded-xl border-2 border-[#c7a34b]"
                                sizes="(max-width: 768px) 100vw, 33vw"
                                priority={true}
                            />
                        </div>
                        <h3 className="font-bold text-xl text-[#c7a34b] mb-2">{dest.name}</h3>
                        <p className="text-[#c7a34b] text-base leading-relaxed">{dest.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

import Image from 'next/image';

const whySriLanka = [
    {
        icon: <Image
            src="/Icons/island-svgrepo-com.svg"
            alt="Pristine Beaches Icon"
            width={32}
            height={32}
            className="icon-feature w-15 h-15"
        />,
        title: 'Pristine Beaches',
        description: 'Golden sands and turquoise waters in Unawatuna, Mirissa, and Bentota',
    },
    {
        icon: <Image
            src="/Icons/temple-svgrepo-com (1).svg"
            alt="Cultural Heritage Icon"
            width={32}
            height={32}
            className="icon-feature w-15 h-15"
        />,
        title: 'Rich Cultural Heritage',
        description: 'Ancient temples, UNESCO World Heritage Sites like Sigiriya and Kandy',
    },
    {
        icon: <Image
            src="/Icons/animal-footprint-svgrepo-com.svg"
            alt="Diverse Wildlife Icon"
            width={32}
            height={32}
            className="icon-feature w-15 h-15"
        />,
        title: 'Diverse Wildlife',
        description: 'Safari adventures in Yala and Udawalawe National Parks',
    },
    {
        icon: <Image
            src="/Icons/tea-leaf-svgrepo-com.svg"
            alt="Lush Tea Plantations Icon"
            width={32}
            height={32}
            className="icon-feature w-15 h-15"
        />,
        title: 'Lush Tea Plantations',
        description: 'Scenic beauty and tea-tasting in Nuwara Eliya',
    },
    {
        icon: <Image
            src="/Icons/wellness-tourism-svgrepo-com.svg"
            alt="Wellness Icon"
            width={32}
            height={32}
            className="icon-feature w-15 h-15"
        />,
        title: 'Wellness',
        description: 'Surfing, hiking, and Ayurveda retreats',
    },
    {
        icon: <Image
            src="/Icons/surfboard-svgrepo-com.svg"
            alt="Adventure Icon"
            width={32}
            height={32}
            className="icon-feature w-15 h-15"
        />,
        title: 'Adventure',
        description: 'Surfing, hiking, trekking, safari',
    },
];

export default function WhySriLanka() {
    return (
        <section id="why-sri-lanka" className="flex flex-col gap-6">
            <h2 className="heading-lg">Why Sri Lanka?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-auto gap-6">
                {whySriLanka.map((item, idx) => {
                    // Center the last item if it's alone in the last row
                    const isLast = idx === whySriLanka.length - 1;
                    const isOdd = whySriLanka.length % 2 !== 0;
                    return (
                        <div
                            className={`card${isLast && isOdd ? " sm:col-span-3 sm:justify-center" : ""}`}
                            key={item.title}
                        >
                            <span className="icon-feature">{item.icon}</span>
                            <h3 className="card-title">{item.title}</h3>
                            <p className="text-muted">{item.description}</p>
                        </div>
                    );
                })}
            </div>
            {/* Interactive map placeholder */}
            {/*<div className="card-lg mt-4">
                <span className="font-bold text-lg mb-2 text-gray-900">Explore Sri Lanka</span>
                <div className="w-full h-48 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">[Interactive Map Coming Soon]</div>
            </div>*/}
        </section>
    );
}

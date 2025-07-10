"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const HERO_IMAGES: { src: string; alt: string; objectPosition?: string }[] = [
    { src: "/image-1.jpg", alt: "Sri Lanka Beach", objectPosition: "75% 40%" },
    { src: "/image-2.jpg", alt: "Sri Lanka Temple", objectPosition: "center" },
    { src: "/image-3.jpg", alt: "Sri Lanka Wildlife", objectPosition: "center" },
    { src: "/image-4.jpg", alt: "Sri Lanka Tea Plantation", objectPosition: "center" },
];

export default function HeroSlider() {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [showNav, setShowNav] = useState(false);
    // Swipe state
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setFade(true);
            setTimeout(() => {
                setIndex((i) => (i + 1) % HERO_IMAGES.length);
                setFade(false);
            }, 600);
        }, 20000); //* Change image every 20 seconds. 1000ms = 1 second
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [index]);

    const goTo = (dir: number) => {
        setFade(true);
        setTimeout(() => {
            setIndex((i) => (i + dir + HERO_IMAGES.length) % HERO_IMAGES.length);
            setFade(false);
        }, 600);
    };

    // Swipe handlers
    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const onTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };
    const onTouchEnd = () => {
        if (touchStartX.current !== null && touchEndX.current !== null) {
            const diff = touchStartX.current - touchEndX.current;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    goTo(1); // swipe left, next
                } else {
                    goTo(-1); // swipe right, prev
                }
            }
        }
        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <div
            className="relative rounded-2xl overflow-hidden w-full h-[480px] sm:h-[600px] flex items-center justify-center bg-gray-100 group shadow-lg border border-gray-200"
            onMouseEnter={() => setShowNav(true)}
            onMouseLeave={() => setShowNav(false)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                <Image
                    src={HERO_IMAGES[index].src}
                    alt={HERO_IMAGES[index].alt}
                    fill
                    className={`object-cover border-4 border-white rounded-2xl shadow-xl ${fade ? "transition-opacity duration-700 opacity-0" : "opacity-100"}`}
                    style={{ objectPosition: HERO_IMAGES[index].objectPosition }}
                    priority
                    quality={100}
                    sizes="(min-width: 1024px) 1200px, 100vw"
                />
            </div>
            {/* Nav Buttons */}
            <button
                className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-2xl rounded-full p-2 shadow transition-opacity duration-500 ${showNav ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                onClick={() => goTo(-1)}
                aria-label="Previous image"
            >
                ‹
            </button>
            <button
                className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-2xl rounded-full p-2 shadow transition-opacity duration-500 ${showNav ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                onClick={() => goTo(1)}
                aria-label="Next image"
            >
                ›
            </button>
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {HERO_IMAGES.map((_, i) => (
                    <span
                        key={i}
                        className={`w-2 h-2 rounded-full ${i === index ? "bg-green-600" : "bg-white/60"}`}
                    />
                ))}
            </div>
        </div>
    );
}

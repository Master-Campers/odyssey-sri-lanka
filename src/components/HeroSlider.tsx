"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

const HERO_IMAGES: { src: string; alt: string; objectPosition?: string }[] = [
    { src: "/HeaderImages/header5.jpg", alt: "Sri Lanka Leopard", objectPosition: "center" },
    { src: "/HeaderImages/header7.jpg", alt: "Sri Lanka Beach", objectPosition: "center" },
    { src: "/HeaderImages/header4.jpg", alt: "Villa ", objectPosition: "center" },
    { src: "/HeaderImages/header6.jpg", alt: "Sri Lanka Perehara", objectPosition: "center" },
    { src: "/HeaderImages/header3.jpg", alt: "Dinner table", objectPosition: "center" },
];

export default function HeroSlider() {
    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [transitioning, setTransitioning] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);


    // Slide transition logic
    const handleNext = useCallback(() => {
        setTransitioning(true);
        setTimeout(() => {
            setIndex((i) => (i + 1) % HERO_IMAGES.length);
            setTransitioning(false);
        }, 500);
    }, []);

    const handlePrev = useCallback(() => {
        setTransitioning(true);
        setTimeout(() => {
            setIndex((i) => (i - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
            setTransitioning(false);
        }, 500);
    }, []);

    // Autoplay logic
    useEffect(() => {
        if (!isPlaying) return;
        timeoutRef.current = setTimeout(() => {
            handleNext();
        }, 6000); // 6s per slide
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [index, isPlaying, handleNext]);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "ArrowRight") handleNext();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    });

    // Pause on hover/touch
    const handleMouseEnter = () => setIsPlaying(false);
    const handleMouseLeave = () => setIsPlaying(true);

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
                if (diff > 0) handleNext();
                else handlePrev();
            }
        }
        touchStartX.current = null;
        touchEndX.current = null;
    };

    // Dot navigation
    const goToSlide = (i: number) => {
        if (i === index) return;
        setTransitioning(true);
        setTimeout(() => {
            setIndex(i);
            setTransitioning(false);
        }, 500);
    };

    return (
        <div
            ref={sliderRef}
            className="relative rounded-2xl overflow-hidden w-full h-[480px] sm:h-[600px] flex items-center justify-center bg-gray-100 shadow-lg border border-[#c7a34b]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            tabIndex={0}
            aria-label="Sri Lanka highlights image slider"
            role="region"
        >
            {/* Slide Images */}
            <div className="absolute inset-0 w-full h-full">
                {HERO_IMAGES.map((img, i) => (
                    <Image
                        key={img.src}
                        src={img.src}
                        alt={img.alt}
                        fill
                        className={`object-cover border-4 border-[#c7a34b] rounded-2xl shadow-xl transition-all duration-700 ${i === index ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"} ${transitioning ? "blur-sm" : ""}`}
                        style={{ objectPosition: img.objectPosition }}
                        priority={i === index}
                        quality={100}
                        sizes="(min-width: 1024px) 1200px, 100vw"
                    />
                ))}
            </div>
            {/* Nav Buttons */}
            <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-yellow-100 rounded-full p-2 shadow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-600 z-20 flex items-center justify-center"
                onClick={handlePrev}
                aria-label="Previous image"
            >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="14" fill="none" />
                    <path d="M17 8L11 14L17 20" stroke="#eab308" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-yellow-100 rounded-full p-2 shadow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-600 z-20 flex items-center justify-center"
                onClick={handleNext}
                aria-label="Next image"
            >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="14" fill="none" />
                    <path d="M11 8L17 14L11 20" stroke="#eab308" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-20">
                {HERO_IMAGES.map((_, i) => (
                    <button
                        key={i}
                        className={`w-4 h-4 rounded-full border-4 border-yellow-600 transition-all duration-300 focus:outline-none shadow-lg ${i === index ? "bg-yellow-600 scale-110" : "bg-white/90 hover:bg-yellow-200"}`}
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => goToSlide(i)}
                    />
                ))}
            </div>
        </div>
    );
}

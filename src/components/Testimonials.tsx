import { useState, useEffect, useRef, useLayoutEffect } from "react";

const TESTIMONIALS = [
    {
        text: "The best trip of our lives! Everything was perfectly organized and the guides were amazing.",
        author: "– Priya & Family",
    },
    {
        text: "Sri Lanka was magical. The custom itinerary fit our family perfectly. Highly recommend!",
        author: "– John & Lisa",
    },
    {
        text: "From beaches to tea country, every moment was memorable. Thank you for a seamless experience!",
        author: "– Ahmed R.",
    },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const [slideDir, setSlideDir] = useState<"left" | "right" | null>(null);
    const [animating, setAnimating] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [nextIndex, setNextIndex] = useState<number | null>(null);
    const [minHeight, setMinHeight] = useState<number | undefined>(undefined);
    const measureRefs = useRef<(HTMLDivElement | null)[]>([]);
    // Swipe state
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    useLayoutEffect(() => {
        // Measure all testimonials and set minHeight
        const heights = measureRefs.current.map(ref => ref?.offsetHeight || 0);
        const max = Math.max(...heights, 0);
        setMinHeight(max);
    }, []);

    useEffect(() => {
        // Re-measure on window resize
        const handleResize = () => {
            const heights = measureRefs.current.map(ref => ref?.offsetHeight || 0);
            const max = Math.max(...heights, 0);
            setMinHeight(max);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            handleSlide(1, "right");
        }, 7000);
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
        // eslint-disable-next-line
    }, [index]);

    const handleSlide = (dir: number, direction: "left" | "right") => {
        if (animating) return;
        setSlideDir(direction);
        setAnimating(true);
        const ni = (index + dir + TESTIMONIALS.length) % TESTIMONIALS.length;
        setNextIndex(ni);
        setTimeout(() => {
            setIndex(ni);
            setSlideDir(null);
            setAnimating(false);
            setNextIndex(null);
        }, 400);
    };

    const getSlideClass = (type: "current" | "next") => {
        if (!slideDir) return "translate-x-0 opacity-100";
        if (type === "current") {
            if (slideDir === "right") return animating ? "animate-slide-out-left" : "translate-x-0 opacity-100";
            if (slideDir === "left") return animating ? "animate-slide-out-right" : "translate-x-0 opacity-100";
        } else {
            if (slideDir === "right") return animating ? "animate-slide-in-right" : "translate-x-full opacity-0";
            if (slideDir === "left") return animating ? "animate-slide-in-left" : "-translate-x-full opacity-0";
        }
        return "translate-x-0 opacity-100";
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
                    handleSlide(1, "right"); // swipe left, next
                } else {
                    handleSlide(-1, "left"); // swipe right, prev
                }
            }
        }
        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <section id="testimonials" className="flex flex-col gap-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
                What Our Travelers Say
            </h2>
            <div
                className="rounded-2xl bg-white shadow p-8 flex flex-col items-center text-center relative min-h-[160px] overflow-hidden"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {/* Hidden testimonials for measuring height */}
                <div className="absolute w-full opacity-0 pointer-events-none -z-10" aria-hidden="true">
                    {TESTIMONIALS.map((t, i) => (
                        <div
                            key={i}
                            ref={el => { measureRefs.current[i] = el; }}
                            className="p-4"
                        >
                            <p className="italic text-lg mb-2">“ {t.text} ”</p>
                            <span className="font-bold">{t.author}</span>
                        </div>
                    ))}
                </div>
                {/* Slides container */}
                <div className="relative w-full h-full min-h-[80px] flex items-center justify-center" style={{ minHeight }}>
                    {/* Current testimonial */}
                    <div
                        className={`absolute w-full top-0 left-0 transition-all duration-400 ease-in-out ${getSlideClass("current")}`}
                        key={`current-${index}-${slideDir ?? "none"}`}
                    >
                        <p className="italic text-gray-800 text-lg mb-2">
                            “ {TESTIMONIALS[index].text} ”
                        </p>
                        <span className="font-bold text-gray-900">{TESTIMONIALS[index].author}</span>
                    </div>
                    {/* Next testimonial (preloaded and animated in) */}
                    {animating && nextIndex !== null && (
                        <div
                            className={`absolute w-full top-0 left-0 transition-all duration-400 ease-in-out ${getSlideClass("next")}`}
                            key={`next-${nextIndex}-${slideDir}`}
                        >
                            <p className="italic text-gray-800 text-lg mb-2">
                                “ {TESTIMONIALS[nextIndex].text} ”
                            </p>
                            <span className="font-bold text-gray-900">{TESTIMONIALS[nextIndex].author}</span>
                        </div>
                    )}
                </div>
                {/* Nav Buttons */}
                <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-2xl rounded-full p-2 shadow"
                    onClick={() => handleSlide(-1, "left")}
                    aria-label="Previous testimonial"
                    disabled={animating}
                >
                    ‹
                </button>
                <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-2xl rounded-full p-2 shadow"
                    onClick={() => handleSlide(1, "right")}
                    aria-label="Next testimonial"
                    disabled={animating}
                >
                    ›
                </button>
                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {TESTIMONIALS.map((_, i) => (
                        <span
                            key={i}
                            className={`w-2 h-2 rounded-full ${i === index ? "bg-green-600" : "bg-gray-300"}`}
                        />
                    ))}
                </div>
            </div>
            <style jsx>{`
        .animate-slide-in-right {
          animation: slideInRight 0.4s forwards;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.4s forwards;
        }
        .animate-slide-out-left {
          animation: slideOutLeft 0.4s forwards;
        }
        .animate-slide-out-right {
          animation: slideOutRight 0.4s forwards;
        }
        @keyframes slideInRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOutLeft {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
        @keyframes slideOutRight {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `}</style>
        </section>
    );
}

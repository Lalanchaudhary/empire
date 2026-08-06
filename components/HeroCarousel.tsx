"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/asset/hero1.png",
    alt: "EMPIRE casino banner",
  },
  {
    src: "/asset/hero2.png",
    alt: "EMPIRE cricket banner",
  },
    {
    src: "/asset/hero3.png",
    alt: "EMPIRE club banner",
  },
];

export default function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const showSlide = (index: number) => {
    setActiveSlide((index + slides.length) % slides.length);
  };

  return (
    <section
      className="relative aspect-[16/9] w-full overflow-hidden bg-black md:aspect-auto md:min-h-[calc(100dvh-6rem)]"
      aria-label="Featured banners"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === activeSlide ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={index !== activeSlide}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-contain object-center md:object-cover"
          />
        </div>
      ))}

      <button
        type="button"
        onClick={() => showSlide(activeSlide - 1)}
        className="absolute left-3 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white transition hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-yellow-400 sm:left-6 sm:size-12"
        aria-label="Previous banner"
      >
        <ChevronLeft aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => showSlide(activeSlide + 1)}
        className="absolute right-3 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white transition hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-yellow-400 sm:right-6 sm:size-12"
        aria-label="Next banner"
      >
        <ChevronRight aria-hidden="true" />
      </button>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => showSlide(index)}
            className={`h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
              index === activeSlide ? "w-7 bg-yellow-400" : "w-2.5 bg-white/60 hover:bg-white"
            }`}
            aria-label={`Show banner ${index + 1}`}
            aria-current={index === activeSlide ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}

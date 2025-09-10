"use client";
import { useState, useEffect } from "react";
import { Playfair_Display, Prata } from "next/font/google";
const eagle = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
const prata = Prata({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
const quotes = [
  "Where every dish tells a story...",
  "An evening of elegance and indulgence...",
  "The essence of fine Italian dining...",
];

export default function Experience() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-accent-200 relative">
      <div className="container mx-auto max-w-4xl text-center px-6 relative">
        {/* Floating Gold Line for Elegance */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-32 h-1 bg-gold-500 rounded-full"></div>

        <h2
          className={`${eagle.className} text-5xl font-extrabold text-primary-900 mb-6`}
        >
          A Timeless Experience
        </h2>

        {/* Animated Changing Quote */}
        <p className="text-xl text-gray-700 italic mb-6 transition-opacity duration-1000 ease-in-out">
          {quotes[quoteIndex]}
        </p>

        <p
          className={`${prata.className} text-lg text-black leading-relaxed mb-8 hover:scale-105 transition-transform`}
        >
          Il Vespro is not just a place to dine—it’s a journey into the heart of
          Italian tradition. A space where candlelit tables, fine wine, and
          heartfelt hospitality come together for an unforgettable evening.
        </p>

        {/* Elegant Button */}
        <a
          href="/reserve"
          className="inline-block bg-primary-900 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gold-600 transition-shadow shadow-md hover:shadow-lg"
        >
          See about us
        </a>
      </div>
    </section>
  );
}

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import img1 from "@/public/images/2.jpeg";
import img2 from "@/public/images/3.jpeg";
import img3 from "@/public/images/4.jpeg";
import img4 from "@/public/images/5.jpeg";
import img5 from "@/public/images/1.jpeg";
import { Eagle_Lake, Prata } from "next/font/google";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const eagle = Eagle_Lake({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
const prata = Prata({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const images = [
  {
    src: img1,
    alt: "An intimate dining experience at Il Vespro",
    caption: "An Intimate Fine Dining Experience",
    button: true,
  },
  {
    src: img2,
    alt: "Handmade pasta crafted with tradition",
    caption: "Handmade Pasta, Crafted with Passion",
  },
  {
    src: img3,
    alt: "A curated selection of fine Italian wines",
    caption: "Curated Selection of Italian Wines",
  },
  {
    src: img4,
    alt: "Gourmet desserts to end your meal on a sweet note",
    caption: "Gourmet Desserts, A Sweet Finale",
  },
  {
    src: img5,
    alt: "Exclusive private dining for special occasions",
    caption: "Private Dining for Special Occasions",
  },
];

export default function Slider() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  // Move to previous image
  const prevImage = () =>
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  // Move to next image
  const nextImage = () =>
    setIndex((prevIndex) => (prevIndex + 1) % images.length);

  return (
    <div
      className={`${prata.className} relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg mt-10`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Image Display */}
      <div className="relative w-full h-96 transition-opacity duration-1000 ease-in-out">
        <Image
          src={images[index].src}
          alt={images[index].alt}
          fill
          className="object-cover rounded-lg"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6">
          <h3 className="text-xl md:text-2xl text-white font-semibold">
            {images[index].caption}
          </h3>
          {images[index].button && (
            <a
              href="/reservations"
              className="mt-4 bg-gold-500 text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-gold-600 transition border-white border-2"
            >
              Make a Reservation
            </a>
          )}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Dots for Navigation */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              index === i ? "bg-white scale-125" : "bg-gray-400"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

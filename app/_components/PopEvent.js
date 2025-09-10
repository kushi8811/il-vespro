"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import image from "@/public/images/event.jpg";
export default function EventPopup() {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setShow(true);
    setTimeout(() => setAnimate(true), 50); // small delay to trigger animation
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div
        className={`relative bg-white rounded-2xl shadow-xl overflow-hidden max-w-md p-2 transform transition-transform duration-500 ${
          animate ? "translate-y-0 opacity-100" : "-translate-y-96 opacity-0"
        }`}
      >
        {/* Event Image */}
        <Image
          src={image}
          alt="Il Vespro Event"
          width={300}
          height={300}
          className="cursor-pointer rounded-lg mb-4"
        />

        {/* Book Button */}
        <Link href="/booking">
          <button
            onClick={() => setShow(false)}
            className="w-full bg-primary-900 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition"
          >
            Book for the Event
          </button>
        </Link>

        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-2 bg-white rounded-full px-3 py-1 shadow"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

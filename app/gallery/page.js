"use client";
import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "@/public/images/1.jpeg";
import img2 from "@/public/images/int1.jpeg";
import img3 from "@/public/images/int2.jpeg";
import img4 from "@/public/images/3.jpeg";
import img5 from "@/public/images/about1.jpeg";
import img6 from "@/public/images/5.jpeg";
import { Eagle_Lake, Prata } from "next/font/google";
import Video from "../_components/Video";

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

const images = [img1, img2, img3, img4, img5, img6];
const texts = [
  {
    title: "Welcome to Our Space",
    description: "Feel the comfort, experience luxury.",
  },
  { title: "A Cozy Corner", description: "Where every detail matters." },
  {
    title: "Perfect Ambience",
    description: "Tranquility and beauty in every corner.",
  },
  {
    title: "Gourmet Experience",
    description: "Indulge in taste and elegance.",
  },
  {
    title: "Modern Design",
    description: "Contemporary style meets timeless elegance.",
  },
  {
    title: "Your Getaway",
    description: "Escape the ordinary, enjoy the extraordinary.",
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative flex justify-center items-center h-screen bg-black overflow-hidden">
        {images.map((img, i) => (
          <motion.div
            key={`image-${i}`}
            initial={{ y: "100%" }}
            animate={{ y: i === index ? "0%" : "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute w-full h-full"
          >
            <Image
              src={img}
              alt={`Gallery image ${i + 1}`}
              width={320}
              height={500}
              className="object-cover w-full h-full rounded-lg"
            />
          </motion.div>
        ))}

        <motion.div
          key={`text-${index}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 px-4"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={`${eagle.className} text-4xl text-center font-bold mb-2`}
          >
            {texts[index].title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`${prata.className} text-lg text-center opacity-75`}
          >
            {texts[index].description}
          </motion.p>
        </motion.div>
      </section>

      {/* Video Section */}
      <Suspense>
        <Video></Video>
      </Suspense>
      <div className="p-10 max-w-screen-xl mx-auto text-center h-[60vh] ">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`${eagle.className} text-3xl  mt-[55px] font-bold mb-4`}
        >
          Ready to Experience Our Space?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className={`${prata.className} text-lg mb-6 opacity-75`}
        >
          Book your visit today and experience the luxury and comfort we offer.
          We look forward to welcoming you!
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="bg-primary-900 text-accent-200 px-6 py-3 rounded-full font-bold text-lg hover:bg-yellow-400 transition"
        >
          Book Now
        </motion.a>
      </div>
    </>
  );
}

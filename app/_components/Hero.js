"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import interno from "@/public/images/int3.jpeg";
import { Eagle_Lake } from "next/font/google";

const eagle = Eagle_Lake({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
const Hero = () => {
  return (
    <div
      className={` relative h-[75vh] w-full flex items-center justify-center text-center overflow-hidden`}
    >
      {/* Background Image with Zoom Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={interno}
          alt="Il Vespro Interior"
          width={1920}
          height={800}
          quality={100}
          className="object-cover w-full h-full"
          priority
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 px-6 md:px-12 lg:px-20 flex flex-col items-center"
      >
        <h1
          className={` ${eagle.className}    text-white text-5xl md:text-6xl lg:text-7xl font-serif tracking-wide`}
        >
          il Vespro
        </h1>
        <p className="text-white text-lg md:text-xl lg:text-2xl mt-3 md:mt-5 font-light italic max-w-lg">
          A taste of elegance in every bite.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/menu"
            className="bg-primary-900 hover:bg-[#b8942c] text-white text-lg font-medium py-3 px-8 rounded-full transition-all shadow-lg"
          >
            View Menu
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/booking"
            className="border border-white text-white text-lg font-medium py-3 px-8 rounded-full hover:bg-white hover:text-black transition-all shadow-lg"
          >
            Book a Table
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

"use client";
import { motion } from "framer-motion";
import AboutOurCuisine from "./_components/AboutOurCousine";
import ContactCard from "./_components/ContactCard";
import EssenceOfIlVespro from "./_components/EssenceOfIlVespro";
import Experience from "./_components/Experience";
// import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Logo from "./_components/Logo";
import Slider from "./_components/Slider";
import { Suspense } from "react";

// Slide-in animation
const slideInVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div className="bg-accent-200">
      <Suspense>
        <Hero />
      </Suspense>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInVariant}
        viewport={{ once: true }}
      >
        <EssenceOfIlVespro />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInVariant}
        viewport={{ once: true }}
      >
        <AboutOurCuisine />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInVariant}
        viewport={{ once: true }}
      >
        <Logo />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInVariant}
        viewport={{ once: true }}
      >
        <Slider />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInVariant}
        viewport={{ once: true }}
      >
        <Experience />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInVariant}
        viewport={{ once: true }}
      >
        <ContactCard />
      </motion.div>
    </div>
  );
}

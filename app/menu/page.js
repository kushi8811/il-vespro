"use client";
import Image from "next/image";
import menu1 from "@/public/images/menu1.jpeg";
import menu2 from "@/public/images/menu2.jpeg";
import menu3 from "@/public/images/menu3.jpeg";
import menu4 from "@/public/images/menu4.jpeg";
import menu5 from "@/public/images/menu5.jpeg";
import { Eagle_Lake, Prata } from "next/font/google";

const eagle = Eagle_Lake({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const menuImages = [menu1, menu2, menu3, menu4, menu5];

export default function Menu() {
  return (
    <div className="menu-container max-w-screen-md mx-auto bg-accent-100  py-12">
      <h1
        className={`${eagle.className} text-3xl text-primary-900 font-bold text-center mb-6`}
      >
        Our Menu
      </h1>
      <div className="space-y-6">
        {menuImages.map((image, index) => (
          <div key={index} className="w-90% flex justify-center">
            <Image
              src={image}
              alt={`Menu item ${index + 1}`}
              width={600}
              height={800}
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

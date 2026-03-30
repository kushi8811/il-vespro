import Image from "next/image";
import Link from "next/link";
import steakImg from "@/public/images/Bistecca.png"; // use the generated bistecca image
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

export default function SteakShowcase() {
  return (
    <section className="relative h-[500px] mb-[25px] md:h-[600px] w-full mt-12">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={steakImg}
          alt="Bistecca alla Fiorentina"
          fill
          className="object-cover object-center"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col justify-center items-center h-full text-center text-white px-6">
        <h2
          className={`${eagle.className} text-4xl md:text-5xl font-bold mb-4`}
        >
          Bistecca Perfection
        </h2>

        <p className={`${prata.className} text-lg md:text-xl max-w-2xl`}>
          Fire-grilled. Bold. Unapologetically authentic.
        </p>

        <Link href="/menu">
          <button className="mt-6 px-6 py-3 bg-transparent hover:bg-primary-900 transition rounded-lg text-lg font-semibold border-white border-2">
            Discover Our Steaks →
          </button>
        </Link>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import restaurantBg from "@/public/images/1.jpeg"; // Replace with an actual image
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

export default function AboutOurCuisine() {
  return (
    <section className="relative h-[500px] mb-[25px] md:h-[600px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={restaurantBg}
          alt="Elegant Italian Restaurant"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col justify-center items-center h-full text-center text-white px-6">
        <h2
          className={`${eagle.className} text-4xl md:text-5xl font-bold mb-4`}
        >
          The Il Vespro Experience
        </h2>
        <p className={`${prata.className} text-lg md:text-xl max-w-2xl`}>
          Immerse yourself in the rich flavors of Italy. From handmade pasta to
          fine wines, every dish is a tribute to tradition and passion.
        </p>

        <Link href="/menu">
          <button className="mt-6 px-6 py-3 bg-transparent hover:bg-primary-900 transition rounded-lg text-lg font-semibold border-white border-2">
            Explore Our Menu →
          </button>
        </Link>
      </div>
    </section>
  );
}

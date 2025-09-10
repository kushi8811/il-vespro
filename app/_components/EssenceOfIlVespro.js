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
export default function EssenceOfIlVespro() {
  return (
    <section
      className={` py-20 bg-accent-200 flex flex-col items-center text-center px-6 `}
    >
      {/* Decorative Line */}
      <div className="w-16 border-t-2 border-gray-700 mb-6"></div>

      {/* Elegant Title */}
      <h2
        className={` ${eagle.className} text-5xl font-serif text-gray-900 font-bold mb-4 tracking-wide`}
      >
        The Essence of Il Vespro
      </h2>

      {/* Subtle Italian Quote */}
      <p className="italic text-lg text-gray-600 mb-6">
        --Food is the essence of life--
      </p>

      {/* Elegant Description */}
      <p
        className={`${prata.className} text-lg text-black max-w-2xl leading-relaxed`}
      >
        At Il Vespro, we invite you to indulge in a refined symphony of
        **flavors, tradition, and artistry**. Each dish is an ode to Italian
        heritage, crafted with passion and the finest ingredients.
        <br />
        Fine wines, warm ambiance, and an unforgettable experience await.
      </p>

      {/* Decorative Line */}
      <div className="w-16 border-t-2 border-gray-700 mt-6"></div>
    </section>
  );
}

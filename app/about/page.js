import Image from "next/image";
import about1 from "@/public/images/about1.jpeg";
import about2 from "@/public/images/about2.jpg";
import { Eagle_Lake, Prata } from "next/font/google";
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
export default function About() {
  return (
    <section className="container mx-auto px-6 py-12 lg:py-20">
      <div className="relative text-center lg:text-left">
        <h2
          className={`${eagle.className} text-5xl font-extrabold text-primary-900 leading-tight`}
        >
          About Il Vespro
        </h2>
        <p
          className={`${prata.className} mt-6 text-lg text-black max-w-3xl mx-auto lg:mx-0`}
        >
          In the heart of Florence, Il Vespro is more than a restaurant, is a
          journey through Italy’s culinary heritage. We blend tradition with
          modern flavors, offering a dining experience that celebrates Tuscany’s
          finest ingredients.
        </p>
        <div className="mt-8 flex justify-center lg:justify-start">
          <Image
            src={about1}
            alt="Il Vespro Interior"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* History Section */}
      <h2
        className={`${eagle.className} text-5xl mt-5 text-center font-extrabold text-primary-900 leading-tight`}
      >
        Our History
      </h2>
      <div className="mt-20 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <Image
            src={about2}
            alt="Historical Piazza del Carmine"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <p className={`${prata.className} mt-6 text-lg text-black max-w-3xl`}>
            Situated in the historic Piazza del Carmine, Il Vespro carries the
            legacy of a square that has stood for centuries. Once a vibrant hub
            for merchants and artists, today it remains a place where tradition
            and culture intertwine.
          </p>
          <p className={`${prata.className} mt-4 text-lg text-black max-w-3xl`}>
            As you dine with us, you’re not just enjoying a meal—you’re stepping
            into a story woven through generations. Every plate, every flavor,
            every detail pays homage to Florence’s past and present.
          </p>
        </div>
      </div>
      <div className="mt-16 text-center">
        <h2
          className={`${eagle.className} text-2xl text-primary-900 md:text-3xl font-semibold`}
        >
          Visit Us
        </h2>

        <div className="mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.1929288381184!2d11.242129175663562!3d43.76885384494372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a570038c2add1%3A0xcf5331cc583e4869!2sRistorante%20Il%20Vespro%20Firenze!5e0!3m2!1sen!2sit!4v1740675628097!5m2!1sen!2sit"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

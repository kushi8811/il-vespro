import { FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import { Eagle_Lake, Prata } from "next/font/google";
const eagle = Eagle_Lake({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function Footer() {
  return (
    <footer className="bg-primary-900 mt-10 text-white py-16 relative">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section - Logo & About */}
        <div className="text-center md:text-left">
          <p
            className={`${eagle.className} mt-4 text-gray-300 hover:text-gold-500 transition`}
          >
            A place where Italian tradition meets elegance. Experience the
            finest cuisine, handcrafted with passion.
          </p>
        </div>

        {/* Middle Section - Navigation */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:translate-x-2 transition-all">
              <Link href="/" className="hover:text-gold-500 transition">
                Home
              </Link>
            </li>
            <li className="hover:translate-x-2 transition-all">
              <Link href="/menu" className="hover:text-gold-500 transition">
                Menu
              </Link>
            </li>
            <li className="hover:translate-x-2 transition-all">
              <Link href="/about" className="hover:text-gold-500 transition">
                About Us
              </Link>
            </li>
            <li className="hover:translate-x-2 transition-all">
              <Link href="/booking" className="hover:text-gold-500 transition">
                Reservations
              </Link>
            </li>
            <li className="hover:translate-x-2 transition-all">
              <Link href="/" className="hover:text-gold-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact & Social Media */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
          <p className="text-gray-300">📍Piazza Del Carmine 4/R</p>
          <p className="text-gray-300">📞 +39 0557098883 </p>
          <p className="text-gray-300">✉️ ilvesprofirenze@gmail.com</p>

          <div className="flex justify-center md:justify-end space-x-4 mt-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61572472094061#"
              className="text-gray-300 hover:text-gold-500 transition-transform hover:scale-110"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/ilvesprofirenze/"
              className="text-gray-300 hover:text-gold-500 transition-transform hover:scale-110"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="tel:+390557098883"
              className="text-gray-300 hover:text-gold-500 transition-transform hover:scale-110"
            >
              <FaPhone size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © 2025 Il Vespro. All Rights Reserved.
      </div>

      {/* Back to Top Button */}
      <div className="absolute bottom-16 right-6">
        <a
          href="#"
          className="bg-accent-200 text-primary-900 p-4 rounded-full shadow-lg hover:bg-gold-600 transition-all"
        >
          ↑
        </a>
      </div>
    </footer>
  );
}

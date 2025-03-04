import { Lora } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const lora = Lora({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s : Il Vespro",
    default: "Il Vepsro",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lora.className}`}>
      <body className="bg-accent-200">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

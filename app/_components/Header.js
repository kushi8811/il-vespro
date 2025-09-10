import Image from "next/image";
import logo from "@/public/images/logo2.png";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="bg-accent-200 shadow-md py-1 md:py-2">
      {" "}
      {/* Reduced padding */}
      <div className="container mx-auto flex justify-center">
        <Image
          src={logo}
          alt="Il Vespro Logo"
          width={200}
          height={200}
          className="h-[90px] sm:h-[90px] md:h-[100px] lg:h-[110px] w-auto" // Adjusted height slightly
        />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;

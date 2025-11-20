"use client";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import home_bg from "../public/assets/home_bg.png";
import Image from "next/image";
import Events from "./components/Events";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full md:min-h-[90vh] flex md:items-center pb-32">

        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
          <Image
            src={home_bg}
            alt="bg"
            className="absolute right-0 max-sm:right-[-25%] max-sm:h-[30%] top-0 w-full md:w-[90%] md:h-auto object-contain"
            priority
          />
        </div>

        {/* Foreground Content */}
          <Header />

      </section>

      {/* Add spacing before events */}
      <div className="mt-10 relative z-10">
        <Events />
      </div>

      {/* Footer full width */}
      <div className="w-full mt-10">
        <Footer />
      </div>
    </div>
  );
}

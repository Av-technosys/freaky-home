'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import home_bg from "../public/assets/home_bg.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full md:min-h-[90vh]  flex md:items-center ">

        {/* Background Image - Responsive */}
        <Image
          src={home_bg}
          alt="bg"
          className="absolute right-0 max-sm:right-[-25%] max-sm:h-[30%] top-0 w-full md:w-[90%] md:h-auto object-contain pointer-events-none select-none z-0"
          priority
        />

        <Header />
      </section>

    </div>
  );
}
"use client";

import Header from "./components/Header";
import home_bg from "../public/assets/home_bg.png";

// import Events from "./components/Events";

import OurEvent from "./components/OurEvent";

import FAQ from "./components/FAQ";

import JoinUs from "./components/JoinUS";
import Image1 from "./components/Image1";
import Events from "./components/Events";
import Image from "next/image";
import TestimonialCards from "./components/Cards";

export default function Home() {
  return (
    <>
      <div className="relative  overflow-x-hidden max-w-7xl mx-auto ">
        {/* Navbar */}

        {/* Hero Section */}
        <section className="relative  md:min-h-[250px] flex md:items-center  ">
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
        <div className="mt-20 px-4 max-w-6xl mx-auto relative z-10">
          <Events />
          <OurEvent />
          <TestimonialCards />
          <Image1 />
          <JoinUs />
          <FAQ />
        </div>

        {/* 
        <WhoWe />
        <ContactUs /> */}

      </div>
    </>
  );
}

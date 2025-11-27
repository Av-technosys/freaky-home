"use client";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import home_bg from "../public/assets/home_bg.png";

// import Events from "./components/Events";

import OurEvent from "./components/OurEvent";
import { ContactUs } from "./components/ContactUs";

import FAQ from "./components/FAQ";

import JoinUs from "./components/JoinUS";
import WhoWe from "./components/WhoWe";
import Image1 from "./components/Image1";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Image from "next/image";
import Cards from "./components/Cards";

// export default function Home() {
//   return (
//     <div>

//     {/* <Events/> */}
//     <OurEvent/>
//     <Testimonials/>
//        <Image1/>
//        <JoinUs/>
//      <FAQ/>

// <WhoWe/>
//     <ContactUs/>

//     </div>
//   );
// }

export default function Home() {
  return (
    <div className="relative  overflow-x-hidden max-w-7xl mx-auto ">
      {/* Navbar */}
      <Navbar />

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
      <div className="mt-10 relative z-10">
        <Events />
      </div>

      <OurEvent />

      <Cards/>
      <Image1 />
      <JoinUs />
      <FAQ />

      <WhoWe />
      <ContactUs />

      {/* Footer full width */}
      <div className=" mt-10">
        <Footer />
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const WhoWe = () => {
  return (
    <div className="max-w-7xl mx-auto relative w-full h-[300px] flex items-center justify-center">
     
<Image
  src="/02.png"
  alt="banner"
  fill   
  className="object-cover brightness-75"
/>
      <div className="relative flex flex-col gap-5 items-center ">
        <h1 className="text-4xl font-bold text-white ">Who We Are</h1>
        <p className="text-white max-sm:text-center max-sm:px-3 ">
          Discover our journey, vision, and the passion that drives us.
        </p>
      
        <div className="flex gap-3">
          <button className="px-10 py-1 border text-white rounded-sm ">Contact Us</button>
         <button className="px-10 py-1 bg-white text-black rounded-sm ">Learn More</button>

        
        </div>
      </div>
     
    </div>
  );
};

export default WhoWe;
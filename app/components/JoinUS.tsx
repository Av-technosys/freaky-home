import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const JoinUs = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="relative h-[300px] rounded-2xl overflow-hidden p-4">


<Image
  src="/03.jpeg"
  alt="photo"
  width={500}           
  height={200}
  className="h-full w-full object-cover rounded-2xl"
/>

        <div className="absolute inset-0 px-12 max-sm:px-10  text-white flex flex-col justify-center gap-20">
          <h2 className="text-3xl max-sm:text-2xl font-bold  ">
            Join us, Become a <br /> Vendor!
          </h2>
          <div className="flex justify-between items-center gap-5">
            <p className="text-sm max-w-md max-sm:text-sm">
              Thousands of vendors are using Eventors to showcase their services
              and get more business than ever before.
            </p>
            <Button className="bg-[linear-gradient(to_right,#FFC107,#FF5722)] text-white text-sm px-6 py-6  max-sm:text-sm max-sm:px-2 rounded-full">
              Start Here
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
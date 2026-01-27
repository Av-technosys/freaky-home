import { Button } from "@/components/ui/button";
import header_img from "../../public/assets/header_img.png";
import Image from "next/image";
import ButtonBg from "@/components/ButtonBg";

export default function Header() {
  return (
    <div className=" container mx-auto px-4 md:px-10 flex flex-col lg:flex-row items-center justify-between  relative z-10 max-sm:mt-[40%] sm:mt-[20%]  lg:mt-28">

      {/* LEFT CONTENT */}
      <div className="max-w-xl text-center lg:text-left mb-10 lg:mb-0">
        <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-[45px] leading-[1.2] md:leading-[58px] text-[#191B21]">
          Transform the Way You <br />  Create Events

        </h1>

        <p className="font-poppins font-medium text-sm sm:text-base md:text-[16px] leading-[190%] text-gray-600 mt-4 md:mt-6  max-w-md mx-auto lg:mx-0">
       Take control of your events with a single, easy-to-use platform designed to simplify planning, manage vendors, track schedules, and handle payments effortlessly
        </p>

        <ButtonBg
          className="mt-6  px-6 py-3.5 font-semibold  md:px-8 md:py-4 md:text-lg md:mt-8"
        >
          Go To Dashboard
        </ButtonBg>

      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center lg:justify-end w-full lg:w-auto">
        <Image
          src={header_img}
          alt="dashboard preview"
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-[520px]"
          priority
        />
      </div>
    </div>
  );
}
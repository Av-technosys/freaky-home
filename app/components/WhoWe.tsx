import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const WhoWe = () => {
  return (
    <div className=" md:my-8 lg:my-8 sm:my-4 max-sm:my-4  relative w-full h-[300px] flex rounded-2xl items-center justify-center">
      <Image
        src="/02.png"
        alt="banner"
        fill
        className="object-cover rounded-2xl brightness-75"
      />
      <div className="relative flex flex-col gap-5 items-center ">
        <h1 className="text-4xl font-bold text-white ">Who We Are</h1>
        <p className="text-white max-sm:text-center max-sm:px-3 ">
         Discover the vision, values, and creativity behind FreakyChimp making every celebration unforgettable.
        </p>

        <div className="flex gap-3">
          <Button variant={"outline"} className=" text-white bg-transparent ">
            <Link href="/contact-us">Contact Us</Link>
          </Button>
          <Button className=" bg-white text-black hover:bg-gray-300  ">
            <Link href="/terms-and-conditions">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhoWe;

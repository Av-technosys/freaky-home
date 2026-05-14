import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ButtonBg from "@/components/ButtonBg";
import Image from "next/image";


const features = [
  {
    icon: <Image src={"/1.svg"} alt="receipt" className=" h-9 w-auto" width={30} height={30} />,
    title: "Manage Services",
    description:
      "Browse, compare, and book catering, décor, photography, entertainment, and more. Every service you need, curated and verified.",
  },
  {
    icon: <Image src={"/2.svg"} alt="lightbulb" className=" h-9 w-auto" width={30} height={30} />,
    title: "Streamline Bookings",
    description:
      "Real-time availability, instant confirmations, and a seamless booking flow mean your event planning moves at the speed you need.",
  },
  {
    icon: <Image src={"/3.svg"} alt="file" className=" h-9 w-auto" width={30} height={30} />,
    title: "Complete Visibility",
    description:
      "From vendor confirmations to payment status — your personalised dashboard gives you complete visibility into every step of your event journey.",
  },
];


const Events = () => {
  return (
    <div className="w-full z-20  md:py-10 flex justify-center">
      <div className="">
        <div className="text-center mb-12 max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl max-sm:mt-5 font-bold">
            One Platform. Endless Possibilities
          </h1>
          <p className=" max-w-2xl mx-auto text-center text-gray-500 mt-4">
            Planning an event shouldn't feel like a second job. Freaky Chimp brings all the tools, vendors, and services you need under one roof — so you can focus on the moments that matter.

          </p>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="border-2  md:col-span-2 group border-orange-300 rounded-2xl p-10 shadow-sm bg-white">
                <h2 className=" text-xl md:text-3xl font-bold ">
                  Everything You Need to Plan
                  <br />
                  Book & Celebrate.
                </h2>

                <ButtonBg className=" cursor-pointer duration-100 px-6 py-5  mt-6">
                  SEE ALL FEATURES <ArrowRight className=" group-hover:-rotate-45 duration-100" />

                </ButtonBg>
              </div>

              <div className="p-6 hover:shadow-xl hover:shadow-orange-100 hover:ring-2 duration-150  hover:ring-orange-300 col-span-1 flex flex-col gap-1 items-start rounded-xl shadow-md bg-white">
                <Image src={"/4.svg"} alt="receipt" className=" h-9 w-auto" width={30} height={30} />
                <h3 className="text-xl font-semibold ">Easy Invoicing</h3>
                <p className="text-gray-600 text-sm">
                  No more chasing paperwork. Vendors on our platform send automated, professional invoices.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-full">
            <div className="grid grid-cols-1 *:hover:ring-3 *:duration-150  *:hover:ring-orange-300 md:grid-cols-3 gap-6 mt-6">
              {features.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-6 col-span-1 flex flex-col gap-1 items-start rounded-xl hover:shadow-xl hover:shadow-orange-100 shadow-md bg-white"
                  >
                    {Icon}
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

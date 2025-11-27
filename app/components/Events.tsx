import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, FolderOpen, Lightbulb, User } from "lucide-react";
import ButtonBg from "@/components/ButtonBg";

const Events = () => {
  return (
    <div className="w-full z-20  md:py-10 flex justify-center">
      <div className="w-full max-w-7xl px-4">
        <div className="text-center mb-12 max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl max-sm:mt-5 font-bold">
            Manage Your Event Service With Ease
          </h1>
          <p className=" max-w-2xl mx-auto text-center text-gray-500 mt-4">
            Cryptocurrency adoption is at less than 1% of the global world
            population with some countries and entities actively fighting
            against its mass adoption and the smartest developers and nerds
            holding the fort.
          </p>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-full max-w-7xl px-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="border-2  md:col-span-2 group border-orange-300 rounded-2xl p-10 shadow-sm bg-white">
                <h2 className=" text-xl md:text-3xl font-bold ">
                  Management software that handles it all.
                </h2>

                <ButtonBg className=" cursor-pointer duration-100 px-6 py-5  mt-6"> 
                    SEE ALL FEATURES <ArrowRight className=" group-hover:-rotate-45 duration-100" />

                </ButtonBg>
              </div>

              <div className="p-6 hover:ring-2 duration-150 hover:ring-orange-300 col-span-1 flex flex-col gap-1 items-start rounded-xl shadow-md bg-white">
                <User size={30} />
                <h3 className="text-xl font-semibold ">Easy Invoicing</h3>
                <p className="text-gray-600 text-sm">
                  Automate recurring invoices and save time by using pre-built
                  templates. Get paid on time.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-full max-w-7xl px-2">
            <div className="grid grid-cols-1 *:hover:ring-2 *:duration-150 *:hover:ring-orange-300 md:grid-cols-3 gap-6 mt-6">
              <div className="p-6  col-span-1 flex flex-col gap-1 items-start rounded-xl shadow-md bg-white">
                <FolderOpen size={30} />
                <h3 className="text-xl font-semibold mb-3">Manage Services</h3>
                <p className="text-gray-600 text-sm">
                  Snap and categorize receipts in seconds and link your bank
                  account.
                </p>
              </div>

             <div className="p-6 col-span-1 flex flex-col gap-1 items-start rounded-xl shadow-md bg-white">
                <Lightbulb size={30
                  
                } />
                <h3 className="text-xl font-semibold mb-3 ">
                  Streamline Bookings
                </h3>
                <p className="text-gray-600 text-sm">
                  Set up payroll and bonuses for all your employees, and never
                  be late on salaries.
                </p>
              </div>

              <div className="p-6  col-span-1 flex flex-col gap-1 items-start rounded-xl shadow-md bg-white">
                <FileText size={30} />
                <h3 className="text-xl font-semibold mb-3">
                  Complete Visibility
                </h3>
                <p className="text-gray-600 text-sm">
                  Get real-time visibility into every expense and payment, with
                  a neat dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

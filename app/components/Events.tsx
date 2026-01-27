import { ArrowRight, FileText, FolderOpen, Lightbulb, User } from "lucide-react";
import ButtonBg from "@/components/ButtonBg";

const Events = () => {
  return (
    <div className="w-full z-20  md:py-10 flex justify-center">
      <div className="w-full max-w-7xl ">
        <div className="text-center mb-12 max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl max-sm:mt-5 font-bold">
           Manage Your Event Services With Ease

          </h1>
          <p className=" max-w-2xl mx-auto text-center text-gray-500 mt-4">
           A powerful event management solution built to help businesses organize services, coordinate vendors, track schedules, and operate efficiently all from a single dashboard.
          </p>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-full max-w-7xl px-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="border-2  md:col-span-2 group border-orange-300 rounded-2xl p-10 shadow-sm bg-white">
                <h2 className=" text-xl md:text-3xl font-bold ">
                 All-in-One Event Management Software.
                </h2>
                <p className="text-gray-600 mt-4">
                  Designed to handle every detail seamlessly.
                </p>
                <ButtonBg className=" cursor-pointer duration-100 px-6 py-5  mt-6"> 
                    SEE ALL FEATURES <ArrowRight className=" group-hover:-rotate-45 duration-100" />

                </ButtonBg>
              </div>

              <div className="p-6 hover:ring-2 duration-150 hover:ring-orange-300 col-span-1 flex flex-col gap-1 items-start rounded-xl shadow-md bg-white">
                <User size={30} />
                <h3 className="text-xl font-semibold ">Easy Invoicing</h3>
                <p className="text-gray-600 text-sm">
                  Simplified invoicing designed for efficiency. Generate professional invoices, automate billing, and track payments seamlessly in one place.
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
                 A smarter way to manage your services. Upload receipts in seconds, organize costs efficiently, and maintain a clear overview of your event operations.

                </p>
              </div>

             <div className="p-6 col-span-1 flex flex-col gap-1 items-start rounded-xl shadow-md bg-white">
                <Lightbulb size={30} />
                <h3 className="text-xl font-semibold mb-3 ">
                  Streamline Bookings
                </h3>
                <p className="text-gray-600 text-sm">
                 A faster, smarter way to handle bookings - organize events, manage timelines, and coordinate services without confusion or delays.

                </p>
              </div>

              <div className="p-6  col-span-1 flex flex-col gap-1 items-start rounded-xl shadow-md bg-white">
                <FileText size={30} />
                <h3 className="text-xl font-semibold mb-3">
                  Complete Visibility
                </h3>
                <p className="text-gray-600 text-sm">
                  A powerful overview of your entire event operation - monitor payments, expenses, and performance metrics in one easy-to-use dashboard.
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

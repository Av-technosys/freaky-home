import { Mail } from "lucide-react";

export const ContactUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-[220px] max-sm:p-8 max-w-7xl mx-auto">
      <h1 className="flex justify-center items-center text-4xl max-sm:text-2xl font-bold text-[#000000]  ">
        Contact Us
      </h1>

      <div className="  flex justify-center items-center gap-5 max-sm:gap-10  ">
        <span className="text-center space-y-2 ">
          {" "}
          <button className="rounded-full p-3 max-sm:p-2 text-white bg-[linear-gradient(to_right,#FFC107,#FF5722)]">
            <Mail />
          </button>
          <p className="font-bold max-sm:text-xs ">hello@freakychimp.com</p>
        </span>
      </div>
    </div>
  );
};

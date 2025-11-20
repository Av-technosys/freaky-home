import React from "react";
import Logo from "../../public/assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white md:px-8 md:py-14 px-4 py-8 border-t border-gray-200">
      <div className=" flex flex-col lg:flex-row justify-between gap-10">
        <div className=" max-w-7xl mx-auto flex flex-col sm:flex-row gap-10 ">
          <div>
            <img
              src={Logo.src}
              alt="Freaky Chimp"
              className="w-32 sm:w-36"
            />
          </div>

          <div className="grid grid-cols-2  gap-10">
            <div>
              <h4 className="text-sm font-semibold mb-4 text-[#757682]">
                Company
              </h4>
              <ul className="space-y-4 text-sm text-[#101924]">
                <li className="cursor-pointer ">Products</li>
                <li className="cursor-pointer ">Blog</li>
                <li className="cursor-pointer ">Twitter</li>
                <li className="cursor-pointer ">LinkedIn</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-[#757682]">
                Legal
              </h4>
              <ul className="space-y-4 text-sm text-[#101924]">
                <li className="cursor-pointer">Status</li>
                <li className="cursor-pointer">Privacy</li>
                <li className="cursor-pointer">Terms of Service</li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" max-w-7xl mx-auto  bg-gray-100  p-3  rounded-xl  flex flex-col gap-7">
          <p className="text-sm text-gray-700 text-center mt-2 ">
            <span className="font-semibold bg-linear-to-r from-[#FFC107] to-[#FF5722] bg-clip-text text-transparent">
              Schedule your demo
            </span>{" "}
            <span className="font-bold text-[#1D1D20]">
              {" "}
              and get setup in hours.
            </span>
          </p>

          <div className="bg-white border border-gray-300 p-3 rounded-full flex flex-row sm:flex-row   ">
            
              <input
                type="email"
                placeholder="Email address"
                
                className=" text-gray-600 placeholder:text-gray-400 "
              />
          
            <button className="bg-linear-to-r from-[#FFC107] to-[#FF5722] rounded-2xl text-white px-2 py-1 text-xs  ">
              Book demo
            </button>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-300 my-6 w-2/3 md:max-w-7xl mx-auto " />

      <div className="max-w-4xl mx-auto text-center px-2 flex flex-col lg:flex-row justify-between text-xs text-[#92939E]">
        <p>© 2025 Freaky Chimp</p>
        <p>
          Registered at Camburgh House, 27 New Dov er Road, Canterbury, CT1 3DN,
          England · Company no. 13585168
        </p>
      </div>
    </footer>
  );
};

export default Footer;

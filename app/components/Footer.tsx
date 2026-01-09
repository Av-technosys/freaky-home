import Logo from "../../public/assets/logo.png";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import ButtonBg from "@/components/ButtonBg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-[#3A3A3A]">
      <footer className="max-w-7xl mx-auto  md:px-8 md:py-14 px-4 py-8 ">
        <div className=" flex flex-col lg:flex-row justify-between gap-10">
          <div className=" max-w-7xl mx-auto flex flex-col sm:flex-row gap-10 ">
            <div>
              <img src={Logo.src} alt="Freaky Chimp" className="w-32 sm:w-36" />
            </div>

            <div className="grid grid-cols-2  gap-10">
              <div>
                <h4 className="text-sm font-semibold mb-4 text-white">
                  Company
                </h4>
                <ul className="space-y-4 text-sm text-white">
                  <li className="cursor-pointer ">Products</li>
                  <li className="cursor-pointer ">Blog</li>
                  <li className="cursor-pointer ">Twitter</li>
                  <li className="cursor-pointer ">LinkedIn</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-4 text-white">Legal</h4>
                <ul className="space-y-4 text-sm text-white">
                  <li>
                    <Link href="/about-us" className="cursor-pointer">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us" className="cursor-pointer">
                      Privacy & Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-and-services" className="cursor-pointer">
                      Terms and Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className=" max-w-7xl mx-auto  bg-[#8A8A8A] p-3  rounded-xl  flex flex-col gap-7">
            <div className="text-sm text-gray-700 text-center mt-2 ">
              <p className="font-semibold  bg-clip-text text-white">
                <span className="text-[#FFC107]">Schedule your demo</span> and
                get setup in hours.
              </p>
            </div>

            <InputGroup className="border-none shadow-none bg-white rounded-full h-10 px-1 ">
              <InputGroupInput placeholder="Enter your email" />
              <InputGroupAddon align="inline-end">
                <ButtonBg className=" h-8">Book demo</ButtonBg>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>

        <hr className="border-t border-gray-300 my-6 w-full mx-auto " />

        <div className="max-w-4xl mx-auto text-center px-2 flex flex-col lg:flex-row justify-between text-xs text-white">
          <p className="w-full text-center">© 2025 Freaky Chimp</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

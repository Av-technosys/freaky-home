"use client";
import Logo from "../../public/assets/logo.png";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import ButtonBg from "@/components/ButtonBg";
import Link from "next/link";

const Footer = () => {
  const scrollToSection = (id: string , route :string) => {
    if(route){
      window.location.href = route;
    }
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[#3A3A3A] text-white">
      <footer className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          
          {/* Left - Logo and Links */}
          <div className="flex-1">
            <img src={Logo.src} alt="Freaky Chimp" className="w-32 mb-6" />
            
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li 
                    onClick={() => scrollToSection("products", "")} 
                    className="hover:text-white cursor-pointer"
                  >
                    Products
                  </li>
                  <li 
                    onClick={() => scrollToSection("contactUs" , "/contact-us")} 
                    className="hover:text-white cursor-pointer"
                  >
                    Contact Us
                  </li>
                  <li className="hover:text-white cursor-pointer">
                    LinkedIn
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li>
                    <Link href="/about-us" className="hover:text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="hover:text-white">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-and-conditions" className="hover:text-white">
                      Terms and Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right - Demo Section */}
          <div className="flex-1 max-w-md">
            <div className="bg-[#555555] p-6 rounded-xl">
              <p className="text-white mb-4 font-medium">
                <span className="text-[#FFC107]">Schedule your demo</span> and
                get setup in hours.
              </p>

              <InputGroup className="bg-white rounded-full h-12 overflow-hidden">
                <InputGroupInput 
                  placeholder="Enter your email" 
                  className="px-4 text-gray-900"
                />
                <InputGroupAddon align="inline-end">
                  <ButtonBg className="h-10 px-6 text-sm">
                    Book demo
                  </ButtonBg>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-500 mt-10 pt-6 text-center text-sm text-gray-300">
          <p>© 2026 Freaky Chimp</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
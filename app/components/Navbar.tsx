"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className=" flex justify-between items-center max-sm:py-1 sm:px-8 sm:py-6 max-sm:px-4 md:px-12 md:py-2 bg-transparent absolute top-0 left-0 w-full z-50">
      {/* LOGO - Always visible */}
      {!isMenuOpen && (
        <div className="flex items-center z-50">
          <Image
            src={Logo}
            alt="Logo"
            width={80}
            height={80}
            className="object-contain w-20 h-20 md:w-16 md:h-16 lg:w-20 lg:h-20"
          />
        </div>
      )}
      {/* DESKTOP MENU */}
      <div className="hidden lg:flex items-center gap-8 xl:gap-16">
        <ul className="flex gap-6 xl:gap-10">
          <Link
            href="/about-us"
            className="text-white font-inter font-semibold text-[14px] leading-none tracking-[-0.02em] uppercase underline cursor-pointer hover:opacity-80 transition-opacity"
          >
            ABOUT US
          </Link>

          <Link
            href="/privacy-policy"
            className="text-white font-inter font-semibold text-[14px] leading-none tracking-[-0.02em] uppercase underline cursor-pointer hover:opacity-80 transition-opacity"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms-and-conditions"
            className="text-white font-inter font-semibold text-[14px] leading-none tracking-[-0.02em] uppercase underline cursor-pointer hover:opacity-80 transition-opacity"
          >
            Terms and Conditions
          </Link>
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6 xl:gap-10">
          {/* SIGN IN */}
          <div className="text-white font-inter font-semibold text-[14px] leading-none tracking-[-0.02em] uppercase cursor-pointer hover:opacity-80 transition-opacity">
            SIGN IN
          </div>

          {/* SIGN UP BUTTON */}
          <Button className="rounded-full px-4 py-2 md:px-6 md:py-3 bg-white text-black font-semibold shadow hover:bg-gray-100 transition-colors">
            SIGN UP
          </Button>
        </div>
      </div>

      {/* MOBILE HAMBURGER BUTTON */}
      <div
        className="lg:hidden flex items-center z-50 absolute right-4 top-1/2 -translate-y-1/2
"
      >
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none p-2 relative"
          aria-label="Toggle menu"
        >
          <RxHamburgerMenu className="w-6 h-6" />
        </button>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`
                fixed top-0 right-0 h-full w-[70%] bg-white z-40
                transform transition-transform duration-300 ease-in-out
                lg:hidden
                ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
            `}
      >
        {/* SIDEBAR HEADER */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <Image
            src={Logo}
            alt="Logo"
            width={80}
            height={80}
            className="object-contain"
          />
          <button
            onClick={closeMenu}
            className="text-black hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <RxCross2 className="w-6 h-6" />
          </button>
        </div>

        {/* SIDEBAR CONTENT */}
        <div className="p-6">
          {/* NAVIGATION LINKS - No underline on mobile */}
          <ul className="space-y-6">
            <li>
              <button
                onClick={closeMenu}
                className="text-gray-900 font-inter font-semibold text-[16px] leading-none tracking-[-0.02em] uppercase cursor-pointer hover:opacity-80 transition-opacity w-full text-left py-3 border-b border-gray-100"
              >
                ABOUT US
              </button>
            </li>
            <li>
              <button
                onClick={closeMenu}
                className="text-gray-900 font-inter font-semibold text-[16px] leading-none tracking-[-0.02em] uppercase cursor-pointer hover:opacity-80 transition-opacity w-full text-left py-3 border-b border-gray-100"
              >
                PRICING
              </button>
            </li>
            <li>
              <button
                onClick={closeMenu}
                className="text-gray-900 font-inter font-semibold text-[16px] leading-none tracking-[-0.02em] uppercase cursor-pointer hover:opacity-80 transition-opacity w-full text-left py-3 border-b border-gray-100"
              >
                CONTACT US
              </button>
            </li>
          </ul>

          {/* AUTH BUTTONS */}
          <div className="mt-8 space-y-4 pt-6  border-gray-200">
            <Button
              onClick={closeMenu}
              variant={"outline"}
              className="w-full rounded-full"
            >
              SIGN IN
            </Button>

            <Button
              className="w-full rounded-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold shadow hover:opacity-90 transition-opacity"
              onClick={closeMenu}
            >
              SIGN UP
            </Button>
          </div>
        </div>
      </div>

      {/* BACKDROP OVERLAY */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
}

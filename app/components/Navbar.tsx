"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";
import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

type NavbarProps = {
  variant?: "dark" | "light";
};

export default function Navbar({ variant }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isDark = variant === "dark";
  const textColor = isDark ? "text-white" : "text-black";
  const hoverColor = isDark ? "hover:opacity-80" : "hover:opacity-70";
  const iconColor = isDark ? "text-white" : "text-black";
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="flex justify-between items-center max-sm:py-1 sm:px-8 sm:py-6 max-sm:px-4 md:px-12 md:py-2 bg-transparent absolute top-0 left-0 w-full z-50">
      {/* LOGO */}
      {!isMenuOpen && (
        <Link href="/" className="flex items-center z-50">
          <Image
            src={Logo}
            alt="Logo"
            width={80}
            height={80}
            className="object-contain w-20 h-20 md:w-24 md:h-24 lg:w-24 lg:h-24"
          />
        </Link>
      )}

      {/* DESKTOP MENU */}
      <div className="hidden lg:flex items-center gap-8 xl:gap-16">
        <ul className="flex gap-6 xl:gap-10">
          <Link
            href="/about-us"
            className={`${textColor} font-inter font-semibold text-[14px] leading-none tracking-[-0.02em] uppercase underline cursor-pointer ${hoverColor} transition-opacity`}
          >
            ABOUT US
          </Link>

          <Link
            href="/contact-us"
            className={`${textColor} font-inter font-semibold text-[14px] leading-none tracking-[-0.02em] uppercase underline cursor-pointer ${hoverColor} transition-opacity`}
          >
            CONTACT US
          </Link>
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6 xl:gap-10">
          <Button
            className={`rounded-full px-4 py-2 md:px-6 md:py-3 font-semibold shadow transition-colors
              ${isDark ? "bg-white text-black" : "bg-black text-white"}
            `}
          >
            SIGN IN
          </Button>
        </div>
      </div>

      {/* MOBILE HAMBURGER */}
      <div className="lg:hidden flex items-center z-50 absolute right-4 top-1/2 -translate-y-1/2">
        <button
          onClick={toggleMenu}
          className="focus:outline-none p-2"
          aria-label="Toggle menu"
        >
          <RxHamburgerMenu className={`w-6 h-6 ${iconColor}`} />
        </button>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-white z-40
          transform transition-transform duration-300 ease-in-out
          lg:hidden
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <Image src={Logo} alt="Logo" width={80} height={80} />
          <button
            onClick={closeMenu}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Close menu"
          >
            <RxCross2 className="w-6 h-6 text-black" />
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-6">
          <ul className="space-y-6">
            <li>
              <Link
                href="/about-us"
                onClick={closeMenu}
                className="block text-gray-900 font-inter font-semibold text-[16px] uppercase py-3 border-b border-gray-100 hover:opacity-80 transition-opacity"
              >
                ABOUT US
              </Link>
            </li>

            <li>
              <Link
                href="/pricing"
                onClick={closeMenu}
                className="block text-gray-900 font-inter font-semibold text-[16px] uppercase py-3 border-b border-gray-100 hover:opacity-80 transition-opacity"
              >
                PRICING
              </Link>
            </li>

            <li>
              <Link
                href="/contact-us"
                onClick={closeMenu}
                className="block text-gray-900 font-inter font-semibold text-[16px] uppercase py-3 border-b border-gray-100 hover:opacity-80 transition-opacity"
              >
                CONTACT US
              </Link>
            </li>
          </ul>

          {/* AUTH */}
          <div className="mt-8 space-y-4 pt-6">
            <Button className="w-full rounded-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold shadow hover:opacity-90">
              SIGN IN
            </Button>
          </div>
        </div>
      </div>

      {/* BACKDROP */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
}

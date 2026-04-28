"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";
import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import ButtonBg from "@/components/ButtonBg";
import {
    Sheet,
    SheetContent,
    SheetClose,
    SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems = [
        { label: "About Us", href: "/about-us" },
        { label: "Contact Us", href: "/contact-us" },
    ];

    const path = usePathname()

    return (
        <nav className=" w-full z-50 bg-transparent">
            {/* <div className=" h-2 bg-orange-400"></div>
            <div className=" h-2 bg-yellow-300"></div> */}
            {/* CONTAINER */}
            <div className={cn(" mx-auto flex items-center justify-between py-2 ", path === "/" ? "max-w-7xl" : "max-w-6xl")}>

                <Link href={"/"} className="flex items-center">
                    <Image
                        src={"/logo.svg"}
                        alt="Logo"
                        width={80}
                        height={80}
                        className="object-contain h-12 w-auto "
                    />
                </Link>


                {/* DESKTOP MENU */}
                <div className="hidden lg:flex items-center gap-8">
                    <ul className=" flex gap-4">
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className="font-medium text-sm    cursor-pointer hover:opacity-80"
                            >
                                <Link href={item.href}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-6">


                        <BecomeVendorButton />
                    </div>
                </div>

                {/* MOBILE MENU BUTTON */}
                <div className="lg:hidden flex items-center">
                    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                        <SheetTrigger asChild>
                            <button className="text-black p-2">
                                <RxHamburgerMenu className="w-6 h-6" />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-white p-0">
                            {/* <div className="flex justify-between items-center p-6 border-b">
                                <Image src={Logo} alt="Logo" width={70} height={70} />
                                <SheetClose asChild>
                                    <button className="text-black p-2">
                                        <RxCross2 className="w-6 h-6" />
                                    </button>
                                </SheetClose>
                            </div> */}
                            <div className="p-6 pt-16">
                                <ul className="space-y-5">
                                    {menuItems.map((item) => (
                                        <li key={item.label}>
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="block w-full text-left text-gray-900 font-semibold text-base uppercase"
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-10 space-y-4">
                                    <BecomeVendorButton />
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}

function BecomeVendorButton() {
    return (
        <Link target="_blank" href={"https://vendor.freakychimp.com"}>
            <ButtonBg className=" w-full max-w-none rounded-xs ">
                Become a Vendor
            </ButtonBg>
        </Link>
    )
}
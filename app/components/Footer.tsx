import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// const quickLinks = ["About Us", "Contact Us", "Policies"];
const quickLinks = [
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    name: "Terms & Conditions",
    href: "/terms-and-condition",
  },
]
const categories = [
  "Party",
  "Baby Shower",
  "Birthday",
  "Engagement",
  "Wedding",
  "Decor",
  "Concert",
];

const socialLinks = [
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  { icon: Instagram, label: "Instagram" },
  { icon: Mail, label: "Email" },
];

const contactItems = [
  {
    icon: MapPin,
    text: "456 Fashion Avenue, Style District, New York, NY 10013",
    href: "https://maps.google.com/?q=456 Fashion Avenue, Style District, New York, NY 10013",
  },
  { icon: Phone, text: "+1 (555) 987-6543", href: "tel:+15559876543" },
  { icon: Mail, text: "hello@freakychip.com", href: "mailto:hello@freakychip.com" },
  { icon: Clock, text: "Mon – Sun: 10:00 AM – 8:00 PM", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white font-sans">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">
        {/* Brand */}
        <div>
          <Link href={"/"} className="flex items-center gap-3 mb-4">
            <Image src={"/logo.svg"} alt="Freaky Chimp Logo" width={40} height={40} className=" h-12 w-auto object-contain" />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
            Your destination for premium fashion and lifestyle. Curated
            collections for the modern individual.
          </p>
          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, label }) => (
              <button
                key={label}
                aria-label={label}
                className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                <Icon size={16} />
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="uppercase tracking-widest text-lg font-extrabold mb-5">
            Quick Links
          </p>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-400 text-sm hover:text-orange-500 transition-colors duration-200 inline-block hover:translate-x-1"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <p className="uppercase tracking-widest text-lg font-extrabold mb-5">
            Categories
          </p>
          <ul className="space-y-3">
            {categories.map((cat) => (
              <li key={cat}>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-orange-500 transition-colors duration-200 inline-block hover:translate-x-1"
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="uppercase tracking-widest text-lg font-extrabold mb-5">
            Contact
          </p>
          <ul className="space-y-4">
            {contactItems.map(({ icon: Icon, text, href }) => (
              <li key={text} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                <Icon
                  size={16}
                  className="text-orange-500 mt-0.5 shrink-0"
                />
                <Link href={href} className="hover:text-orange-500 transition-colors">{text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 flex-wrap">
          <span className="text-gray-500 text-xs">
            © 2024 Freaky chimp. All rights reserved.
          </span>
          {/* <div className="flex items-center gap-4 flex-wrap">
            {["Privacy Policy", "Terms & Conditions"].map(
              (item, i, arr) => (
                <span key={item} className="flex items-center gap-4">
                  <a
                    href="#"
                    className="text-gray-500 text-xs hover:text-orange-500 transition-colors"
                  >
                    {item}
                  </a>
                  {i < arr.length - 1 && (
                    <span className="text-gray-700">|</span>
                  )}
                </span>
              )
            )}
          </div> */}
        </div>
      </div>

      {/* Accent bar */}
      <div className="h-1 bg-linear-to-r from-orange-500 via-red-500 to-yellow-400" />
    </footer>
  );
}
import type { Metadata } from "next";
import { Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Freaky Chimp | Smart Event Management & Online Booking Platform",
    template: "%s | Freaky Chimp – Plan, Book & Manage Events Online",
  },
  description:
    "Freaky Chimp is a modern event management platform that lets users plan events, book services, manage vendors, and make secure payments—all in one place.",
  alternates: {
    canonical: "https://www.freakychimp.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Freaky Chimp | Smart Event Management & Online Booking Platform",
    description:
      "Plan unforgettable events with Freaky Chimp. Discover trusted vendors, book services online, track events in real time, and enjoy secure payments.",
    url: "https://www.freakychimp.com",
    siteName: "Freaky Chimp",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freaky Chimp | Event Planning Made Easy",
    description:
      "Plan, book, and manage events online with Freaky Chimp. Trusted vendors, real-time updates, and secure payments.",
  },
};

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // optional but recommended
});
const playflair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${playflair.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
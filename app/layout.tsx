import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

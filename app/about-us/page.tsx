import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "About Freaky Chimp | Smart Event Management Platform",
  },
  description:
    "Freaky Chimp is a modern event management platform that helps users plan, book, and manage events online. Discover trusted vendors, seamless bookings, and secure payments—all in one place.",
  alternates: {
    canonical: "https://www.freakychimp.com/about-us",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "About Freaky Chimp | Effortless Event Planning & Booking",
    description:
      "Learn how Freaky Chimp simplifies event planning with online booking, verified vendors, real-time updates, and secure payments.",
    url: "https://www.freakychimp.com/about-us",
    siteName: "Freaky Chimp",
    type: "website",
  },
};

const AboutUs = () => {
  
  return (
    <>
    <section id="contactUs" className="w-full py-16 md:py-12  md:mt-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About Us
          </h1>

          {/* Intro */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
            Freaky is a modern event management app designed to simplify the way
            events are planned, organized, and experienced. We bring creativity,
            technology, and seamless execution together to make every event
            unforgettable.
          </p>

          {/* Mission */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Our mission is to make event planning stress-free, transparent, and
            exciting by connecting users with the right tools, vendors, and
            experiences—all in one place.
          </p>

          {/* What We Do */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            What We Do
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            With Freaky, users can create events, discover services, manage
            bookings, handle payments, and track everything in real time—from
            planning to execution.
          </p>

          {/* Why Choose Freaky */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Why Choose Freaky
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
            <li>Easy-to-use event creation flow</li>
            <li>Secure and smooth payment integration</li>
            <li>Real-time updates & notifications</li>
            <li>Trusted vendors & partners</li>
            <li>End-to-end event management</li>
          </ul>

          {/* Vision */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Our vision is to become the go-to event management platform for
            individuals and businesses worldwide, where every event feels
            effortless and extraordinary.
          </p>

          {/* Brand Promise */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Brand Promise
          </h2>
          <p className="text-gray-700 leading-relaxed mb-10">
            We believe events shouldn’t be boring. At Freaky, we turn ideas into
            experiences and moments into memories.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

import ButtonBg from "@/components/ButtonBg";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className=" text-gray-800 ">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <section className="text-center px-6 md:px-20 py-20">
          <p className="text-sm text-gray-400 uppercase mb-3">Our Story</p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Built for the People <br /> Who Make Events Magical
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Freaky Chimp was created with one simple belief — planning a
            great event should be as joyful as attending one. We built a
            unified platform that connects passionate vendors with people
            who want to celebrate life’s most important moments.
          </p>
        </section>

        {/* MISSION */}
        <section className="px-6 md:px-20 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm text-gray-400 uppercase mb-2">
              Our Mission
            </p>

            <h2 className="text-3xl font-semibold mb-5">
              Helping Event Businesses Reach Their True Potential
            </h2>

            <p className="text-gray-600 leading-7">
              We’re on a mission to modernise the way events are planned,
              managed, and experienced. By combining smart technology with
              a curated network of trusted vendors, Freaky Chimp empowers
              event professionals to grow their business and helps
              customers celebrate with confidence.
            </p>
          </div>

          <Image
            src="/team-building-scaled.jpg.jpeg"
            width={300}
            height={400}
            alt=""
            className="rounded-sm w-full h-80 object-cover"
          />
        </section>

        {/* VALUES */}
        <section className="px-6 md:px-20 py-20">
          <div className="max-w-3xl mb-14">
            <p className="text-sm text-gray-400 uppercase mb-2">
              Our Values
            </p>

            <h2 className="text-3xl font-semibold">
              The Principles That Drive Everything We Do
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-neutral-200 p-8 rounded-sm">
              <h3 className="text-xl font-semibold mb-3">Trust</h3>

              <p className="text-gray-600 leading-7">
                Every vendor on our platform is verified. We hold our
                partners to high standards so customers can book with
                complete peace of mind.
              </p>
            </div>

            <div className="border border-neutral-200 p-8 rounded-sm">
              <h3 className="text-xl font-semibold mb-3">Simplicity</h3>

              <p className="text-gray-600 leading-7">
                Event planning is already complex. Our platform removes
                friction from discovery to booking to payment.
              </p>
            </div>

            <div className="border border-neutral-200 p-8 rounded-sm">
              <h3 className="text-xl font-semibold mb-3">Growth</h3>

              <p className="text-gray-600 leading-7">
                Freaky Chimp helps event professionals reach more clients,
                grow their business, and scale sustainably.
              </p>
            </div>

            <div className="border border-neutral-200 p-8 rounded-sm">
              <h3 className="text-xl font-semibold mb-3">Celebration</h3>

              <p className="text-gray-600 leading-7">
                Every feature and partnership is built around making your
                event truly unforgettable.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center px-6 md:px-20 py-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Be Part of Something Special?
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Whether you’re planning an event or offering your services,
            Freaky Chimp is your home. Join a growing community of vendors
            and customers redefining how events are celebrated.
          </p>

          <ButtonBg className="rounded-sm h-12 max-w-none w-48">
            Become a Vendor
          </ButtonBg>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
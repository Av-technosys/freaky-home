import ButtonBg from "@/components/ButtonBg";
import React from "react";

const AboutUs = () => {
  return (
    <div className=" text-gray-800 ">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <section className="text-center px-6 md:px-20 py-20">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Built for modern <br /> event management systems
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Freaky Chimp provides a unified platform to manage bookings,
            payments, vendors, and operations — helping businesses run smarter
            and more efficiently.
          </p>

          {/* Image Row */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f29c1b8a5b"
              alt=""
              className="  rounded-sm h-60 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt=""
              className="rounded-sm  h-60 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt=""
              className="rounded-sm h-60 w-full object-cover"
            />
          </div>

          <p className="mt-10 max-w-3xl mx-auto text-gray-600">
            We are on a mission to help event businesses reach their full
            potential through smarter and more efficient workflows across all
            operations.
          </p>
        </section>

        {/* STATS */}
        <section className="px-6 md:px-20 pb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <h2 className="text-3xl font-bold">25+</h2>
              <p className="text-gray-500 text-sm mt-2">
                Industry Recognitions
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">100+</h2>
              <p className="text-gray-500 text-sm mt-2">
                Trusted Vendors
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">500+</h2>
              <p className="text-gray-500 text-sm mt-2">
                Events Managed
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">3,000+</h2>
              <p className="text-gray-500 text-sm mt-2">
                Happy Customers
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 1 */}
        <section className="px-6 md:px-20 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm text-gray-400 mb-2 uppercase">Solution</p>
            <h2 className="text-3xl font-semibold mb-4">
              Delivering Certainty
            </h2>
            <p className="text-gray-600 mb-6">
              Freaky Chimp helps businesses overcome event management
              challenges with powerful automation and real-time tracking.
            </p>

            <div className="space-y-4 text-gray-600">
              <p>
                <span className="font-semibold">Faster Decisions</span> — Get
                insights instantly and adapt quickly.
              </p>
              <p>
                <span className="font-semibold">Sustainable Growth</span> —
                Scale operations while maintaining efficiency.
              </p>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c"
            alt=""
            className="rounded-sm w-full h-80 object-cover"
          />
        </section>

        {/* SECTION 2 */}
        <section className="px-6 md:px-20 py-20 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
            alt=""
            className="rounded-sm w-full h-80 object-cover"
          />

          <div>
            <p className="text-sm text-gray-400 mb-2 uppercase">Solution</p>
            <h2 className="text-3xl font-semibold mb-4">
              Unparalleled Experience
            </h2>
            <p className="text-gray-600 mb-6">
              We bring modern tools and seamless workflows to event
              businesses, helping teams collaborate better and deliver
              exceptional results.
            </p>

            <div className="space-y-4 text-gray-600">
              <p>• Built for scalability and performance</p>
              <p>• Consistent and reliable workflows</p>
              <p>• Designed for modern teams</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center px-6 md:px-20 py-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Freaky Chimp Today
          </h2>
          <p className="text-gray-600 mb-8">
            Start managing your events smarter, faster, and better.
          </p>

          {/* <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
                        Get Started
                    </button> */}
          <ButtonBg className=" rounded-sm h-12 max-w-none w-40">
            Become a Vendor
          </ButtonBg>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
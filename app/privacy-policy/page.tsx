import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Freaky Chimp Privacy Policy Ensuring Trust",
  },
  description:
    "Read Freaky Chimp’ Privacy Policy to understand how we collect, use, and protect your data.",
  alternates: {
    canonical: "https://www.freakychimp.com/privacy-policy/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Freaky Chimp Privacy Policy Ensuring Trust",
    description:
      "Read Freaky Chimp’ Privacy Policy to understand how we collect, use, and protect your data.",
    url: "https://www.freakychimp.com/privacy-policy/",
    siteName: "Freaky Chimp",
    type: "website",
  },
};
const PrivacyPolicy = () => {
  return (
    <>
      <div className="  pt-24 min-h-screen py-12 px-6 md:px-16">
        <div className="max-w-4xl  mx-auto p-8">
          {/* Page Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>
          {/* Intro */}
          <p className="text-sm text-gray-500 mb-4">
            Last Updated: May 13, 2026
          </p>

          <p className="text-gray-700 leading-relaxed mb-10">
            At Freaky Chimp, we value the trust you place in us. This
            Privacy Policy describes how Freaky Chimp ("we", "us", or
            "our") collects, uses, and shares your information when you
            visit freakychimp.com or use our services and applications.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            1. Information We Collect
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            We collect information to provide better services and improve
            your experience on our platform.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
            <li>
              <strong>Direct Information:</strong> Name, email address,
              phone number, and vendor/business details during registration.
            </li>

            <li>
              <strong>Transaction Data:</strong> Booking details, payment
              information, and invoices processed through secure third-party
              payment gateways.
            </li>

            <li>
              <strong>Usage Data:</strong> IP addresses, browser details,
              device identifiers, and analytics information for performance
              and security improvements.
            </li>
          </ul>

          {/* Section 2 */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            2. How We Use Your Information
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
            <li>Facilitate bookings between customers and vendors</li>
            <li>Process payments and generate invoices</li>
            <li>
              Send updates, notifications, and promotional communications
            </li>
            <li>Improve platform functionality and user experience</li>
            <li>Maintain platform security and prevent fraud</li>
          </ul>

          {/* Section 3 */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            3. Sharing Your Information
          </h2>

          <p className="text-gray-700 mb-4">
            We do not sell your personal data. Information may only be
            shared in the following circumstances:
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
            <li>
              <strong>Between Users & Vendors:</strong> Necessary contact
              details shared to fulfill bookings.
            </li>

            <li>
              <strong>Service Providers:</strong> Trusted third parties
              including payment processors, hosting providers, and analytics
              services.
            </li>

            <li>
              <strong>Legal Requirements:</strong> If required by law or to
              protect our rights, users, and platform security.
            </li>
          </ul>

          {/* Section 4 */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            4. Data Security
          </h2>

          <p className="text-gray-700 leading-relaxed mb-10">
            We implement industry-standard security measures including SSL
            encryption and secure infrastructure to protect your personal
            information. However, no online transmission or storage method
            is completely secure, and absolute security cannot be guaranteed.
          </p>

          {/* Section 5 */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            5. Cookies
          </h2>

          <p className="text-gray-700 leading-relaxed mb-10">
            We use cookies and similar technologies to remember user
            preferences, improve performance, analyze traffic, and enhance
            your browsing experience. You may disable cookies through your
            browser settings, though some features may not function properly.
          </p>

          {/* Section 6 */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            6. Your Rights
          </h2>

          <p className="text-gray-700 leading-relaxed mb-10">
            Depending on your location, you may have the right to access,
            update, correct, or delete your personal data. To exercise your
            rights or make a privacy-related request, contact us at
            privacy@freakychimp.com.
          </p>

          {/* Footer */}
          <p className="text-sm text-gray-500">
            By using Freaky Chimp, you agree to the terms outlined in this
            Privacy Policy.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;

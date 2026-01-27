import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Terms and Conditions - Freaky Chimp",
  },
  description:
    "Welcome to Freaky Chimp. Please read our terms before submitting any information or content on this website.",
  alternates: {
    canonical: "https://www.freakychimp.com/terms-and-conditions/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Terms and Conditions - Freaky Chimp",
    description:
      "Welcome to Freaky Chimp. Please read our terms before submitting any information or content on this website.",
    url: "https://www.freakychimp.com/terms-and-conditions/",
    siteName: "Freaky Chimp",
    type: "website",
  },
};

const TermsAndConditions = () => {
  return (
    <>
    <section id="contactUs" className="w-full py-16 md:py-12  md:mt-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto">
          {/* Page Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Terms & Conditions
          </h1>

          {/* Introduction */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            By accessing or using the Freaky Event mobile application (the
            “App”), you agree to be bound by these Terms and Conditions. These
            terms apply to the Freaky Event mobile app and any related
            communications or services provided through the app.
          </p>
          <p className="text-gray-700 leading-relaxed mb-10">
            If you do not agree with these terms, please do not use the App.
          </p>

          {/* Limitation of Liability */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Under no circumstances shall Freaky Event, its team, or affiliates
            be liable for any direct, indirect, incidental, special, or
            consequential damages, including but not limited to loss of profits,
            data, or business opportunities, arising from:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Your use or inability to use the App</li>
            <li>Any errors, interruptions, or inaccuracies in the App</li>
            <li>Unauthorized access to or alteration of your data</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-10">
            Any costs related to device damage, data loss, or service repair
            resulting from the use of the App shall be borne solely by the user.
            Freaky Event is not responsible for outcomes arising from the use of
            information or services available through the App. We reserve the
            right to modify pricing, features, or usage policies at any time.
          </p>

          {/* License */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">License</h2>
          <p className="text-gray-700 leading-relaxed mb-10">
            Freaky Event grants you a revocable, non-exclusive,
            non-transferable, limited license to download, install, and use the
            App strictly in accordance with these Terms and Conditions.
          </p>

          {/* User Agreement */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            User Agreement
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            These Terms constitute a legal agreement between you (whether an
            individual or an entity) and Freaky Event (“we”, “us”, or “our”).
          </p>
          <p className="text-gray-700 leading-relaxed mb-10">
            Violation of these Terms may result in suspension or termination of
            your account without prior notice.
          </p>

          {/* Definitions */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Definitions and Key Terms
          </h2>
          <ul className="space-y-2 text-gray-700 mb-10">
            <li>
              <strong>Cookie:</strong> A small data file stored on your device
              to enhance user experience, analytics, and preferences.
            </li>
            <li>
              <strong>Company:</strong> Refers to the owner and operator of the
              Freaky Event mobile application.
            </li>
            <li>
              <strong>Device:</strong> Any internet-enabled device such as a
              smartphone, tablet, or computer used to access the App.
            </li>
            <li>
              <strong>Freaky Event Service:</strong> All services, features, and
              content provided through the Freaky Event mobile app.
            </li>
            <li>
              <strong>Third-Party Service:</strong> Any external service,
              partner, advertiser, or platform integrated with or linked to the
              App.
            </li>
            <li>
              <strong>You / User:</strong> Any individual or legal entity that
              downloads, registers, or uses the Freaky Event App.
            </li>
          </ul>

          {/* Restrictions */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Restrictions
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
            <li>Use the App for any unlawful or prohibited purpose</li>
            <li>Attempt to gain unauthorized access to systems or data</li>
            <li>
              Interfere with the App’s security, performance, or functionality
            </li>
            <li>
              Copy, modify, distribute, or exploit any part of the App without
              permission
            </li>
          </ul>

          {/* Changes */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Changes to Terms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-10">
            Freaky Event reserves the right to update or modify these Terms at
            any time. Continued use of the App after changes are posted
            constitutes acceptance of the revised Terms.
          </p>

          {/* Contact */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Contact & Support
          </h2>
          <p className="text-gray-700 leading-relaxed mb-12">
            For any questions regarding these Terms and Conditions, please reach
            out via the in-app support section of the Freaky Event mobile
            application.
          </p>

          {/* Footer Acknowledgement */}
          <p className="text-sm text-gray-500">
            By using the Freaky Event mobile app, you acknowledge that you have
            read, understood, and agreed to these Terms and Conditions.
          </p>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;

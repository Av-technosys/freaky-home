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
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Page Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>

          {/* Intro */}
          <p className="text-gray-700 leading-relaxed mb-10">
            Freaky Event ("we", "our", "us") respects your privacy and is
            committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, store, and share information
            when you use the Freaky Event mobile application and related
            services.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            1. Information We Collect
          </h2>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            a. Personal Information
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Name, email address, phone number</li>
            <li>Profile details</li>
            <li>Payment and transaction details (processed securely)</li>
            <li>Event participation details</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            b. Automatically Collected Information
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
            <li>Device information (model, OS version)</li>
            <li>App usage data</li>
            <li>IP address and log data</li>
          </ul>

          {/* Section 2 */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
            <li>Create and manage your account</li>
            <li>Enable event discovery, booking, and participation</li>
            <li>Process payments securely</li>
            <li>Communicate updates, notifications, and support messages</li>
            <li>Improve app performance and user experience</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>

          {/* Section 3 */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            3. Sharing of Information
          </h2>
          <p className="text-gray-700 mb-4">
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Service Providers:</strong> Payment gateways, analytics,
              and notification services
            </li>
            <li>
              <strong>Affiliates:</strong> Companies under common ownership or
              control
            </li>
            <li>
              <strong>Legal Authorities:</strong> When required by law
            </li>
          </ul>
          <p className="text-gray-700 mb-10">
            We do not sell your personal data.
          </p>

          {/* Section 4 */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            4. Payments & Security
          </h2>
          <p className="text-gray-700 leading-relaxed mb-10">
            All payment-related information is handled through secure and
            trusted third-party payment processors. Freaky Event does not store
            full card details on its servers.
          </p>

          {/* Section 5 */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            5. Cookies & Tracking Technologies
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Remember user preferences</li>
            <li>Improve app functionality</li>
            <li>Analyze usage patterns</li>
          </ul>
          <p className="text-gray-700 mb-10">
            You can control cookie settings through your device or browser
            settings. Disabling cookies may affect certain app features.
          </p>

          {/* Section 6 */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            6. Third-Party Links & Services
          </h2>
          <p className="text-gray-700 leading-relaxed mb-10">
            The app may contain links to third-party websites or services.
            Freaky Event is not responsible for the privacy practices or content
            of third parties. We recommend reviewing their privacy policies
            separately.
          </p>

          {/* Section 7 */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            7. Children’s Privacy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-10">
            Freaky Event is not intended for children under the age of 13. We do
            not knowingly collect personal information from children. If such
            data is identified, it will be deleted promptly.
          </p>

          {/* Section 8 */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            8. Your Rights & Choices
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
            <li>Access, update, or delete your personal data</li>
            <li>Withdraw consent for data processing</li>
            <li>Request data portability</li>
          </ul>

          {/* Section 9 */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            9. GDPR Compliance (For EEA Users)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-10">
            If you are located in the European Economic Area (EEA), your data is
            processed in accordance with the General Data Protection Regulation
            (GDPR). We ensure lawful, fair, and transparent handling of personal
            data.
          </p>

          {/* Section 10 */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            10. California Privacy Rights (CCPA & CalOPPA)
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
            <li>Know what personal data is collected</li>
            <li>Request access or deletion of personal data</li>
            <li>Opt out of data sale (we do not sell personal data)</li>
          </ul>

          {/* Section 11 */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            11. Business Transfers
          </h2>
          <p className="text-gray-700 leading-relaxed mb-10">
            In the event of a merger, acquisition, or sale of assets, user data
            may be transferred to the new entity, subject to the same privacy
            commitments.
          </p>

          {/* Section 12 */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            12. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-10">
            We may update this Privacy Policy from time to time. Any changes
            will be notified through the app or other appropriate channels.
            Continued use of the app indicates acceptance of the updated policy.
          </p>

          {/* Section 13 */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            13. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed mb-12">
            If you have any questions or concerns about this Privacy Policy, you
            may contact us through the support section available within the
            Freaky Event mobile application.
          </p>

          {/* Footer */}
          <p className="text-sm text-gray-500">
            By using the Freaky Event mobile app, you agree to this Privacy
            Policy.
          </p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;

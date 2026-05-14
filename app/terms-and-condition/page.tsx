import React from "react";

const TermsAndConditions = () => {
    return (
        <div className="  pt-24 min-h-screen py-12 px-6 md:px-16">
            <div className="max-w-4xl  mx-auto p-8">

                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Terms & Conditions
                </h1>
                <p className="text-gray-600 mb-4">
                    Last Updated: May 13, 2026
                </p>

                <p className="text-gray-700 mb-6">
                    Welcome to <span className="font-semibold">Freaky Chimp</span>.
                    By accessing our website or using our services, you agree to
                    comply with and be bound by the following terms and conditions.
                </p>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">
                        1. The Marketplace Platform
                    </h2>

                    <p className="text-gray-700">
                        Freaky Chimp acts as a marketplace platform connecting
                        customers with third-party vendors. We do not directly provide
                        event services and are not responsible for the quality,
                        execution, or delivery of vendor services.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">
                        2. User Accounts
                    </h2>

                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                            Users must provide accurate and complete registration
                            information.
                        </li>

                        <li>
                            You are responsible for maintaining the confidentiality of
                            your account credentials.
                        </li>

                        <li>
                            Users must be at least 18 years old to book or list
                            services.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">
                        3. Vendor Listings
                    </h2>

                    <p className="text-gray-700">
                        Vendors are solely responsible for their listings, pricing,
                        availability, licenses, permits, and service accuracy listed
                        on the platform.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">
                        4. Bookings and Payments
                    </h2>

                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                            Bookings are confirmed only after platform confirmation.
                        </li>

                        <li>
                            Payments are securely processed through integrated payment
                            partners.
                        </li>

                        <li>
                            Vendors agree to use Freaky Chimp’s invoicing system for
                            platform-generated bookings.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">
                        5. Cancellations and Refunds
                    </h2>

                    <p className="text-gray-700 mb-3">
                        Cancellation and refund terms may vary depending on the
                        vendor’s individual policies.
                    </p>

                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                            Vendor cancellation policies will be displayed during
                            booking.
                        </li>

                        <li>
                            Platform fees are generally non-refundable unless caused by
                            a platform-related issue.
                        </li>

                        <li>
                            Refund eligibility for services depends on agreements
                            between customers and vendors.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">
                        6. Prohibited Conduct
                    </h2>

                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Using the platform for illegal activities</li>

                        <li>
                            Circumventing the platform to avoid service or booking fees
                        </li>

                        <li>
                            Posting false, misleading, or defamatory reviews and content
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">
                        7. Limitation of Liability
                    </h2>

                    <p className="text-gray-700">
                        To the maximum extent permitted by law, Freaky Chimp shall not
                        be liable for indirect, incidental, or consequential damages
                        arising from platform usage or vendor-provided services.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">
                        8. Intellectual Property
                    </h2>

                    <p className="text-gray-700">
                        All platform content including text, graphics, branding,
                        software, and logos are the property of Freaky Chimp and are
                        protected under applicable copyright and intellectual property
                        laws.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">
                        9. Governing Law
                    </h2>

                    <p className="text-gray-700">
                        These terms are governed by the laws of India. Any disputes
                        shall be subject to the exclusive jurisdiction of the courts
                        in Jaipur, Rajasthan.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3">
                        10. Contact Information
                    </h2>

                    <p className="text-gray-700">
                        Email: hello@freakychimp.com
                    </p>
                </section>

            </div>
        </div>
    );
};

export default TermsAndConditions;
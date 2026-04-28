import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="  pt-24 min-h-screen py-12 px-6 md:px-16">
            <div className="max-w-4xl mx-auto   p-8">

                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Privacy Policy
                </h1>

                <p className="text-gray-600 mb-4">
                    Last Updated: April 2026
                </p>

                <p className="text-gray-700 mb-6">
                    Welcome to <span className="font-semibold">Freaky Chimp</span>. This platform acts as a
                    marketplace connecting customers with event service providers such as vendors,
                    organizers, and businesses. This Privacy Policy explains how we collect, use,
                    and protect your information when you use our services.
                </p>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        1. Information We Collect
                    </h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Personal details (name, email, phone number)</li>
                        <li>Event and booking details (event type, date, attendees)</li>
                        <li>Vendor interactions and service preferences</li>
                        <li>Payment details (processed securely via third-party providers)</li>
                        <li>Device and usage data (IP address, browser, activity logs)</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        2. How We Use Your Information
                    </h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>To connect customers with vendors and enable bookings</li>
                        <li>To manage event services and transactions</li>
                        <li>To send booking confirmations, reminders, and notifications</li>
                        <li>To improve platform functionality and user experience</li>
                        <li>To ensure security and prevent fraud</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        3. Sharing Your Information
                    </h2>
                    <p className="text-gray-700">
                        We do not sell your personal data. Your information may be shared with:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
                        <li>Vendors for booking fulfillment and service delivery</li>
                        <li>Payment gateways for secure transactions</li>
                        <li>Service providers supporting platform operations</li>
                        <li>Authorities when legally required</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        4. Data Security
                    </h2>
                    <p className="text-gray-700">
                        We use industry-standard security practices to protect user data including
                        authentication, encrypted transactions, and secure storage. However, no system
                        is completely secure.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        5. User Accounts & Authentication
                    </h2>
                    <p className="text-gray-700">
                        Users can register via email, phone number (OTP), or social login. Account
                        information is securely stored and can be updated from profile settings.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        6. Payments & Transactions
                    </h2>
                    <p className="text-gray-700">
                        Payments are processed via secure third-party providers. We do not store
                        sensitive payment information. Booking confirmations, receipts, and transaction
                        history are available within the platform.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        7. Notifications & Communication
                    </h2>
                    <p className="text-gray-700">
                        We send notifications such as booking confirmations, reminders, payment updates,
                        and review requests via push notifications and email.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        8. Your Rights
                    </h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Access and update your personal data</li>
                        <li>Request deletion of your account</li>
                        <li>Withdraw consent at any time</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        9. Cookies & Tracking
                    </h2>
                    <p className="text-gray-700">
                        Cookies are used to enhance experience, analyze usage, and improve services.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        10. Changes to Policy
                    </h2>
                    <p className="text-gray-700">
                        We may update this policy periodically. Changes will be reflected with an updated date.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        11. Contact Us
                    </h2>
                    <div className="mt-3 text-gray-700">
                        <p>Email: xyz@gmail.com</p>
                        <p>Phone: +91 XXXXXXX369</p>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default PrivacyPolicy;
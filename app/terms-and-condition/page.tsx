import React from "react";

const TermsAndConditions = () => {
    return (
        <div className="  pt-24 min-h-screen py-12 px-6 md:px-16">
            <div className="max-w-4xl  mx-auto p-8">

                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Terms & Conditions
                </h1>

                <p className="text-gray-600 mb-4">
                    Last Updated: April 2026
                </p>

                <p className="text-gray-700 mb-6">
                    Welcome to <span className="font-semibold">Freaky Chimp</span>. This platform
                    acts as a marketplace connecting customers with event service providers.
                    By using our platform, you agree to the following terms.
                </p>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Platform Usage</h2>
                    <p className="text-gray-700">
                        Users agree to use the platform only for lawful purposes. Any misuse,
                        fraudulent activity, or disruption of services is strictly prohibited.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. User Accounts</h2>
                    <p className="text-gray-700">
                        Users must provide accurate information during registration (email, phone,
                        or social login). You are responsible for maintaining account confidentiality
                        and all activities under your account.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">3. Booking & Services</h2>
                    <p className="text-gray-700">
                        The platform allows users to browse vendors, select services, and book events.
                        All bookings depend on vendor availability and confirmed time slots.
                        Users must provide correct event details while booking.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">4. Payments</h2>
                    <p className="text-gray-700">
                        Payments must be completed via authorized payment gateways. Bookings are
                        confirmed only after successful payment. In case of failure, bookings may
                        remain on hold until payment is completed.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">5. Cancellation Policy</h2>
                    <p className="text-gray-700">
                        Cancellation charges are applied based on timing:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
                        <li>No charge if cancelled well before the event</li>
                        <li>Partial refund (e.g., 50%) if cancelled within a defined period</li>
                        <li>No refund if cancelled close to the event date</li>
                    </ul>
                    <p className="text-gray-700 mt-2">
                        Refunds (if applicable) are processed automatically as per platform policy.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">6. Vendor Responsibility</h2>
                    <p className="text-gray-700">
                        Vendors are responsible for service delivery, quality, pricing, and availability.
                        The platform acts only as an intermediary and is not liable for service disputes.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">7. Reviews & Ratings</h2>
                    <p className="text-gray-700">
                        Users can submit reviews and ratings after service completion. Reviews must
                        be genuine and respectful. The platform reserves the right to moderate or
                        remove inappropriate content.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">8. Notifications</h2>
                    <p className="text-gray-700">
                        Users agree to receive notifications related to bookings, payments,
                        reminders, and updates via app and email.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">9. Limitation of Liability</h2>
                    <p className="text-gray-700">
                        Freaky Chimp is not liable for indirect, incidental, or consequential damages
                        arising from platform usage, vendor services, or booking issues.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">10. Termination</h2>
                    <p className="text-gray-700">
                        We reserve the right to suspend or terminate accounts that violate these terms
                        or engage in suspicious activity.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">11. Changes to Terms</h2>
                    <p className="text-gray-700">
                        Terms may be updated periodically. Continued use of the platform implies
                        acceptance of updated terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3">12. Contact</h2>
                    <p className="text-gray-700">
                        Email: xyz@gmail.com <br />
                        Phone: +91 XXXXXXX369
                    </p>
                </section>

            </div>
        </div>
    );
};

export default TermsAndConditions;
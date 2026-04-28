import React from "react";

const RefundPolicy = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-16">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">

                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Refund & Cancellation Policy
                </h1>

                <p className="text-gray-600 mb-4">
                    Last Updated: April 2026
                </p>

                <p className="text-gray-700 mb-6">
                    This policy outlines the terms under which refunds and cancellations are handled on
                    <span className="font-semibold"> Freaky Chimp</span>.
                </p>

                {/* Section */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Cancellation Policy</h2>
                    <p className="text-gray-700">
                        Users can cancel bookings based on the cancellation window defined by the vendor.
                        Late cancellations may incur charges.
                    </p>
                </section>

                {/* Section */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Refund Eligibility</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Full refund for cancellations within allowed time</li>
                        <li>Partial refund for late cancellations (if applicable)</li>
                        <li>No refund for completed services</li>
                    </ul>
                </section>

                {/* Section */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">3. Processing Time</h2>
                    <p className="text-gray-700">
                        Refunds are processed within 5–10 business days and credited to the original payment method.
                    </p>
                </section>

                {/* Section */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">4. Vendor Responsibility</h2>
                    <p className="text-gray-700">
                        Vendors are responsible for honoring their stated refund policies. Any disputes should be resolved directly with the vendor.
                    </p>
                </section>

                {/* Section */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">5. Non-Refundable Cases</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Missed events</li>
                        <li>Last-minute cancellations</li>
                        <li>Violation of terms</li>
                    </ul>
                </section>

                {/* Section */}
                <section>
                    <h2 className="text-xl font-semibold mb-3">6. Contact</h2>
                    <p className="text-gray-700">
                        For refund-related queries, contact us at xyz@gmail.com or +91 XXXXXXX369.
                    </p>
                </section>

            </div>
        </div>
    );
};

export default RefundPolicy;
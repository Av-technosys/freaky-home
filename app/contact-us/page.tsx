"use client";

import { useState } from "react";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

/* ------------------ ZOD SCHEMA ------------------ */
const contactSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email"),
    company: z.string().min(1, "Company is required"),
    phone: z.string().min(10, "Phone must be at least 10 digits"),
    useCase: z.string().min(1, "Please select a use case"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        useCase: "",
        message: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    /* ------------------ HANDLERS ------------------ */
    const handleChange = (key: string, value: string) => {
        setFormData((prev) => ({ ...prev, [key]: value }));

        // clear error on change
        setErrors((prev) => ({ ...prev, [key]: "" }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const result = contactSchema.safeParse(formData);

        // if (!result.success) {
        //     const fieldErrors: Record<string, string> = {};

        //     result.error.errors?.forEach((err) => {
        //         const field = err.path[0] as string;
        //         fieldErrors[field] = err.message;
        //     });

        //     setErrors(fieldErrors);
        //     return;
        // }

        setErrors({});
        console.log("Valid Data:", result.data);
    };

    /* ------------------ UI ------------------ */
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-16">
            <div className="w-full max-w-xl">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Contact us
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
                        Contact the ClickHouse team today for support with all your
                        real-time analytics and data management needs. We would love
                        to hear from you.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* First + Last Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm mb-1 block">
                                First name *
                            </label>
                            <Input
                                value={formData.firstName}
                                onChange={(e) =>
                                    handleChange("firstName", e.target.value)
                                }
                            />
                            {errors.firstName && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.firstName}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="text-sm mb-1 block">
                                Last name *
                            </label>
                            <Input
                                value={formData.lastName}
                                onChange={(e) =>
                                    handleChange("lastName", e.target.value)
                                }
                            />
                            {errors.lastName && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.lastName}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-sm mb-1 block">
                            Business email *
                        </label>
                        <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                                handleChange("email", e.target.value)
                            }
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Company */}
                    <div>
                        <label className="text-sm mb-1 block">
                            Company *
                        </label>
                        <Input
                            value={formData.company}
                            onChange={(e) =>
                                handleChange("company", e.target.value)
                            }
                        />
                        {errors.company && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.company}
                            </p>
                        )}
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="text-sm mb-1 block">
                            Phone number *
                        </label>
                        <Input
                            value={formData.phone}
                            onChange={(e) =>
                                handleChange("phone", e.target.value)
                            }
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.phone}
                            </p>
                        )}
                    </div>

                    {/* Use Case */}
                    <div>
                        <label className="text-sm mb-1 block">
                            Use Case *
                        </label>
                        <Select
                            onValueChange={(value) =>
                                handleChange("useCase", value)
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="analytics">
                                    Analytics
                                </SelectItem>
                                <SelectItem value="saas">SaaS</SelectItem>
                                <SelectItem value="fintech">
                                    Fintech
                                </SelectItem>
                                <SelectItem value="ecommerce">
                                    E-commerce
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.useCase && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.useCase}
                            </p>
                        )}
                    </div>

                    {/* Message */}
                    <div>
                        <label className="text-sm mb-1 block">
                            Tell us more about your use case *
                        </label>
                        <Textarea
                            rows={5}
                            value={formData.message}
                            onChange={(e) =>
                                handleChange("message", e.target.value)
                            }
                        />
                        {errors.message && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.message}
                            </p>
                        )}
                    </div>

                    {/* Submit */}
                    <Button
                        type="submit"
                        className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-5 rounded-md"
                    >
                        Submit
                    </Button>

                    {/* Footer */}
                    <p className="text-xs text-gray-500 text-center">
                        By registering, you acknowledge that ClickHouse will
                        process your personal information in accordance with our
                        <Link href="/privacy-policy" className="underline cursor-pointer ml-1">
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </form>
            </div>
        </div>
    );
}
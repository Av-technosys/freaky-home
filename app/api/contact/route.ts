import { NextResponse } from "next/server";
import { z } from "zod";
import db from "@/db";
import { ContactLead } from "@/db/schema";

const contactSchema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    company: z.string().min(1),
    phone: z.string().min(10),
    useCase: z.string().min(1),
    message: z.string().min(10),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const parsed = contactSchema.parse(body);

        const result = await db
            .insert(ContactLead)
            .values({
                name: `${parsed.firstName} ${parsed.lastName}`,
                email: parsed.email,
                company: parsed.company,
                phone: parsed.phone,
                useCase: parsed.useCase,
                message: parsed.message,
            })
            .returning();

        return NextResponse.json({ success: true, data: result[0] }, { status: 201 });
    } catch (error) {
        if (error instanceof z.ZodError) {
            const zodError = error as z.ZodError;
            return NextResponse.json(
                { success: false, errors: zodError.issues },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { success: false, error: "Unable to save contact form data." },
            { status: 500 }
        );
    }
}

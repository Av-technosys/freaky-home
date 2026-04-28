import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const ContactLead = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    company: varchar({ length: 255 }).notNull(),
    phone: varchar({ length: 255 }).notNull(),
    useCase: varchar({ length: 255 }).notNull(),
    message: varchar({ length: 255 }).notNull(),
});

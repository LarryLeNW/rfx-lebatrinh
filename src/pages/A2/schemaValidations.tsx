import { z } from "zod";

export const step1Schema = z.object({
    fullName: z.string().min(1, "Required"),
    email: z.string().min(1, "Required").email("Invalid email"),
    phone: z
        .string()
        .min(1, "Required")
        .regex(/^[0-9+\-()\s]{7,20}$/i, "Invalid phone"),
});

export const step2Schema = z.object({
    address: z.string().min(1, "Required"),
    city: z.string().min(1, "Required"),
    country: z.string().min(1, "Required"),
    startDate: z.string().min(1, "Required"),
});

export const step3Schema = z.object({
    plan: z.string().min(1, "Required"),
    quantity: z.coerce.number().int().min(1, "Must be ≥ 1"),
    notes: z.string().optional().default(""),
});
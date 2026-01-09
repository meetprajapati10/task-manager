import { z } from "zod";

export const loginSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .trim()
    .nonempty("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export const signupSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty("Name is required")
    .min(3, "Name must be at least 3 characters"),
  email: z.email(),
  password: z
    .string()
    .trim()
    .nonempty("Password is required")
    .min(8, "Password must be at least 8 characters"),
  adminInviteToken: z.string().trim().optional(),
});

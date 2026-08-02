import { z } from "zod";

export const hireSchema = z.object({
  name: z
    .string()
    .min(2, "Name is required"),

  email: z
    .string()
    .email("Enter a valid email"),

  company: z
    .string()
    .min(2, "Company is required"),

  country: z
    .string()
    .min(2, "Country is required"),

  role: z
    .string()
    .min(2, "Role is required"),

  projectType: z
    .string()
    .min(2, "Project type is required"),

  budget: z
    .string()
    .min(1, "Select a budget"),

  timeline: z
    .string()
    .min(1, "Select timeline"),

  description: z
    .string()
    .min(20, "Please describe your project."),
});

export type HireFormData = z.infer<typeof hireSchema>;
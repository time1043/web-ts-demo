import z from "zod";

// type Gender = "" | "male" | "female";
export const genderSchema = z.enum(["", "male", "female"]);
export type Gender = z.infer<typeof genderSchema>;

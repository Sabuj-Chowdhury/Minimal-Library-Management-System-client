import type { IBookInput } from "@/types/book";
import { z } from "zod";

export const bookSchema = z.object({
  title: z.string().min(1),
  author: z.string().min(1),
  genre: z.enum([
    "FICTION",
    "NON_FICTION",
    "SCIENCE",
    "HISTORY",
    "BIOGRAPHY",
    "FANTASY",
  ]),

  isbn: z.string().min(1),
  description: z.string().min(1),
  copies: z.coerce.number().min(1),
});

export type BookFormSchema = z.infer<typeof bookSchema> & IBookInput;

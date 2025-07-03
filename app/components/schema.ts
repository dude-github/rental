import { z } from "zod";

// We're keeping a simple non-relational schema here.

// IRL, you will have a schema for your data models.

export const expenseSchema = z.object({
  id: z.string(),

  label: z.string(),

  name: z.string(),

  category: z.string(),

  // type: z.enum(["income", "expense"]),
  type: z.number(),

  amount: z.number(),

  date: z.string(),

  // input: z.date(),
});

export type Expense = z.infer<typeof expenseSchema>;

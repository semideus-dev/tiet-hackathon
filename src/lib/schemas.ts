import { z } from "zod";

export const requestBookFormSchema = z.object({
  author: z.string().min(1, "Author is required."),
  title: z.string().min(1, "Book title is required."),
  quantity: z.number().min(1, "Invalid quantity."),
  price: z.number().min(1, "Free nhi milgi chuteye"),
  remarks: z.string(),
});

export const reportBinStatusFormSchema = z.object({
  location: z.string().min(1, "Location is required."),
  status: z.string().min(1, "Status is required."),
  remarks: z.string(),
});

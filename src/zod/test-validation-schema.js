import { z } from 'zod';

const optionSchema = z.object({
  optionText: z
    .string()
    .trim()
    .min(1, { message: 'Option text must be at least 1 character long' })
    .max(255, { message: 'Option text must not exceed 255 characters' }),
  isCorrect: z.boolean(),
});
const questionSchema = z.object({
  questionText: z
    .string()
    .trim()
    .min(1, { message: 'Question text must be at least 1 character long' })
    .max(255, { message: 'Question text must not exceed 255 characters' }),
  options: z.array(optionSchema),
});
const testValidationSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, { message: 'Test title must be at least 1 character long' })
    .max(60, { message: 'Test title must not exceed 60 characters' }),
  description: z
    .string()
    .trim()
    .max(1000, { message: 'Description must not exceed 1000 characters' })
    .optional(), // optional
  author: z
    .string()
    .trim()
    .min(1, { message: 'Author name must be at least 1 character long' })
    .max(255, { message: 'Author name must not exceed 255 characters' })
    .default('Anonymous'),
  marksPerQuestion: z
    .number()
    .min(1, { message: 'Marks per question must be at least 1' })
    .max(10, { message: 'Marks per question must not exceed 10 characters' })
    .default(1),
  negativeMarksPerQuestion: z
    .number()
    .min(0, { message: 'Negative marks per question must be at least 0' })
    .max(10, {
      message: 'Negative marks per question must not exceed 10 characters',
    })
    .default(0),
  TimePerQuestion: z
    .number()
    .min(10, { message: 'Time per question must be at least 10 seconds' })
    .default(60),
  subjects: z.array(z.string().trim()), // Assuming subjects is an array of strings
  exams: z.array(z.string().trim()), // Assuming exams is an array of strings
  published: z.boolean().default(false),
  questions: z.array(questionSchema),
});

export { testValidationSchema };

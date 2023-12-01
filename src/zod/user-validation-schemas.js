import { z } from 'zod';

const conductedTestSchema = z.object({
  _id: z.string().trim(),
});
const completedTestSchema = z.object({
  _id: z.string().trim(),
});
const userValidationSchema = z.object({
  username: z
    .string()
    .trim()
    .toLowerCase()
    .min(5, { message: 'Username must be at least 5 character long' })
    .max(24, { message: 'Username must not exceed 24 characters' }),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: 'Invalid email address' }),
  password: z
    .string()
    .trim()
    .min(6, { message: 'Password must be at least 6 characters long' })
    .max(24, { message: 'Password must not exceed 24 characters' }),
  fullName: z
    .string()
    .trim()
    .min(6, { message: 'Full name must be at least 6 characters long' })
    .max(24, { message: 'Full name must not exceed 24 characters' }),
  dateOfBirth: z.date().optional(),
  profilePicture: z.string().trim().default(''),
  registrationDate: z.date().default(() => new Date()),
});

const userValidationSchemaForLogin = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: 'Invalid email address' }),
  password: z
    .string()
    .trim()
    .min(6, { message: 'Password must be at least 6 characters long' })
    .max(24, { message: 'Password must not exceed 24 characters' }),
});

export { userValidationSchema, userValidationSchemaForLogin };

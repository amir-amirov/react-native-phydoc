import {z} from 'zod';

export const schema = z.object({
  phone: z
    .string()
    .min(3, {message: 'Phone number must be at least 3 characters'})
    .max(50, {message: 'Phone number cannot exceed 50 characters'}),
  password: z
    .string()
    .min(1, {message: 'Password is required'})
    .min(8, {message: 'Password must be at least 8 characters'}),
});

export type FormData = z.infer<typeof schema>;

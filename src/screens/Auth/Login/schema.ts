import {z} from 'zod';

export const schema = z.object({
  phone: z.string().min(8).max(50),
  password: z.string(),
});

export type FormData = z.infer<typeof schema>;

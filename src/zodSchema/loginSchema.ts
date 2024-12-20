import * as z from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email({ message: 'Invalid email address' }),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+[{\]};:'",<.>/?]).{8,}$/,
      {
        message: 'Password must be at least 8 char, number and special char',
      }
    ),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;

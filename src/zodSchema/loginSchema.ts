import * as z from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email({ message: 'Invalid email address' }),
  password: z
    .string()
    .regex(/^(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+[{\]};:'",<.>/?])(?=.*\d).{8,}$/, {
      message:
        'Password must contain at least one uppercase letter, one special character, and be at least 8 characters long.',
    }),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;

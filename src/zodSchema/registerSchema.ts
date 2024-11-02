import * as z from 'zod';

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(1, 'Name is required')
      .max(20, 'Name must be less than 20 characters')
      .regex(/^[a-zA-Z]+$/, { message: 'Name must contain only letters' }),
    email: z
      .string()
      .min(1, 'Email is required')
      .email({ message: 'Invalid email address' }),
    password: z
      .string()
      .regex(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+[{\]};:'",<.>/?])(?=.*\d).{8,}$/,
        {
          message:
            'Password must contain at least one uppercase letter, one special character, and be at least 8 characters long.',
        }
      ),
    confirmPassword: z
      .string()
      .regex(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+[{\]};:'",<.>/?])(?=.*\d).{8,}$/,
        {
          message:
            'Password must contain at least one uppercase letter, one special character, and be at least 8 characters long.',
        }
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type RegisterSchemaType = z.infer<typeof registerSchema>;

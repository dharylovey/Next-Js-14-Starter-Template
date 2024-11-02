import * as z from 'zod';

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email({ message: 'Invalid email address' }),
});

export type ForgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>;

import { z } from 'zod';

export default z.object({
    name: z.string({ required_error: 'Name is required', invalid_type_error: 'Name must be string' })
        .min(4, { message: 'Minimum name length is 4 characters' })
        .max(30, { message: 'Maximum name length is 30 characters' })
        .trim(),
    email: z.string({ required_error: 'Email is required', invalid_type_error: 'Email must be string' })
        .email({ message: 'Invalid email address' })
        .trim(),
    phone: z.string({ invalid_type_error: 'Phone number must be string' })
        .regex(RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g), 'Invalid phone number')
        .trim()
        .optional(),
    message: z.string({ required_error: 'Message is required', invalid_type_error: 'Message must be string' })
        .trim(),
});

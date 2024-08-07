import { z } from 'zod';

export const FormSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name cannot be empty' })
    .refine(
      (value) => value === '' || /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value),
      'Imie powinno zawierać tylko litery'
    ),
  surname: z
    .string()
    .min(1, { message: 'Surname cannot be empty' })
    .refine(
      (value) => value === '' || /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value),
      'Nazwisko powinno zawierać tylko litery'
    ),
  email: z.string().email({ message: 'Email is invalid' }),
  agreement: z.boolean().refine((value) => value === true, {
    message: 'Checkbox should be checked',
  }),
});

export type FormFields = z.infer<typeof FormSchema>;

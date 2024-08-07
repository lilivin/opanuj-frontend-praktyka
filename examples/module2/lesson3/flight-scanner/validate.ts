import { z } from 'zod';
import { customDateSchema } from './dateSchema';

const TripEnum = z.enum(['one-way', 'round-trip']);

const FormSchema = z
  .object({
    origin: z.string().min(1, { message: 'Origin cannot be empty' }),
    destination: z.string().min(1, { message: 'Destination cannot be empty' }),
    trip: TripEnum,
    startDate: customDateSchema,
    endDate: customDateSchema,
  })
  .required();

export function validate(data: FormData) {
  const formValues = {
    origin: data.get('origin') as string,
    destination: data.get('destination') as string,
    trip: data.get('trip') as string,
    startDate: data.get('startDate') as string,
    endDate: data.get('endDate') as string,
  };

  return FormSchema.safeParse(formValues);
}

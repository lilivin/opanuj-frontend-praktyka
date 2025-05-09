import { z } from 'zod';

const dateRegex = /^\d{2}-\d{2}-\d{4}$/;

export const customDateSchema = z.string().refine(
  (value) => {
    if (!dateRegex.test(value)) {
      return false;
    }
    const [day, month, year] = value.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return (
      date.getDate() === day &&
      date.getMonth() === month - 1 &&
      date.getFullYear() === year
    );
  },
  {
    message: 'Invalid date format. Expected format: DD-MM-YYYY',
  }
);

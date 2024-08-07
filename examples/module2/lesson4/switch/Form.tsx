import { useState } from 'react';
import { Switch } from './Switch';
import { FormSchema } from './FormSchema';
import { z } from 'zod';

export function Form() {
  const [formState, setFormState] = useState({
    name: '',
    surname: '',
    email: '',
    agreement: false,
  });
  const [errors, setErrors] = useState<string[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      FormSchema.parse(formState);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.errors.map((err) => err.message));
      }
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        Imię
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <label>
        Nazwisko
        <input type="text" name="surname" onChange={handleChange} />
      </label>
      <label>
        Email
        <input type="email" name="email" onChange={handleChange} />
      </label>
      <Switch
        onChange={handleChange}
        name="agreement"
        label="Zgoda na przetwarzanie danych"
        checked={formState.agreement}
      />
      {errors.length > 0 && (
        <ul>
          {errors.map((error) => {
            return <li>{error}</li>;
          })}
        </ul>
      )}
      <button type="submit">Wyślij</button>
    </form>
  );
}

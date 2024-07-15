function haveMoreThanOneCharacter(text: string) {
  return text.length > 1 ? true : false;
}

export function formValidator(
  firstName: string,
  lastName: string,
  age: number
) {
  if (typeof age !== 'number' || isNaN(age)) {
    throw new Error('Age must be a number');
  }

  const errors: string[] = [];

  if (!haveMoreThanOneCharacter(firstName)) {
    errors.push('First name should have more than one character');
  }

  if (!haveMoreThanOneCharacter(lastName)) {
    errors.push('Last name should have more than one character');
  }

  if (age < 0) {
    errors.push('Age must be a positive number');
  }

  return errors;
}

import { describe, expect, test } from 'vitest';
import { formValidator } from './validator';

describe('Form validation', () => {
  test('should return an error if first name is missing', () => {
    const errors = formValidator('', 'Doe', 30);
    expect(errors).toContain('First name should have more than one character');
  });

  test('should return an error if last name is missing', () => {
    const errors = formValidator('John', '', 30);
    expect(errors).toContain('Last name should have more than one character');
  });

  test('should return an error if age is negative', () => {
    const errors = formValidator('John', 'Doe', -1);
    expect(errors).toContain('Age must be a positive number');
  });

  test('should throw an error if age is not a number', () => {
    expect(() => formValidator('John', 'Doe', 'not-a-number')).toThrowError(
      'Age must be a number'
    );
  });

  test('should not return an error - all data valid', () => {
    const errors = formValidator('John', 'Doe', 1);
    expect(errors).toHaveLength(0);
  });
});

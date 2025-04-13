// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { test, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

afterEach(cleanup);

test('should render inputs with labels', async () => {
  render(<App />);

  expect(screen.getByLabelText('Book Name')).toBeInTheDocument();
  expect(screen.getByLabelText('Category')).toBeInTheDocument();
  expect(screen.getByLabelText('Author')).toBeInTheDocument();
});

test('should add correct data to app, display them and delete', async () => {
  render(<App />);

  await userEvent.type(screen.getByLabelText('Book Name'), 'Test1');
  await userEvent.type(screen.getByLabelText('Category'), 'Test2');
  await userEvent.type(screen.getByLabelText('Author'), 'Test3');

  await userEvent.click(screen.getByText('Dodaj'));

  expect(screen.getByText('Book name: Test1')).toBeInTheDocument();
  expect(screen.getByText('Book category: Test2')).toBeInTheDocument();
  expect(screen.getByText('Book author: Test3')).toBeInTheDocument();
  expect(screen.getByText('Delete')).toBeInTheDocument();

  await userEvent.click(screen.getByText('Delete'));

  expect(screen.queryByText('Book name: Test1')).toBeNull();
  expect(screen.queryByText('Book category: Test2')).toBeNull();
  expect(screen.queryByText('Book author: Test3')).toBeNull();
  expect(screen.queryByText('Delete')).toBeNull();
});

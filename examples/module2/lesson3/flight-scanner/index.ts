import { validate } from './validate';

const form = document.querySelector('#flight-form') as HTMLFormElement;
const errorsContainer = document.querySelector('#errors') as HTMLDivElement;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  errorsContainer.innerHTML = '';
  const formData = new FormData(form);

  const result = validate(formData);

  if (!result.success) {
    const errors = result.error.errors;
    errors.forEach((error) => {
      const errorItem = document.createElement('li');
      errorItem.textContent = error.message;
      errorsContainer.appendChild(errorItem);
    });
  } else {
    console.log('Success!');
  }
});

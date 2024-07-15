import { useState } from 'react';
import { Book } from './Book';

type FormProps = {
  books: Book[];
  setBooks: (prevState: Book[]) => void;
};

const emptyState = {
  bookName: '',
  category: '',
  author: '',
};

const Form = ({ books, setBooks }: FormProps) => {
  const [book, setBook] = useState<Book>(emptyState);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setBook((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBooks([...books, book]);
    setBook(emptyState);
  }

  return (
    <form>
      <label>
        Book Name
        <input
          onChange={handleChange}
          type="text"
          name="bookName"
          value={book.bookName}
        />
      </label>
      <label>
        Category
        <input
          onChange={handleChange}
          type="text"
          name="category"
          value={book.category}
        />
      </label>
      <label>
        Author
        <input
          onChange={handleChange}
          type="text"
          name="author"
          value={book.author}
        />
      </label>
      <button onClick={handleSubmit}>Dodaj</button>
    </form>
  );
};

export default Form;

import { useState } from 'react';
import Form from './Form';
import { Book } from './Book';
import BooksList from './BooksList';

const App = () => {
  const [books, setBooks] = useState<Book[]>([]);
  return (
    <div>
      <Form books={books} setBooks={setBooks} />
      <BooksList books={books} setBooks={setBooks} />
    </div>
  );
};

export default App;

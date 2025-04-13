import { Book } from './Book';

type BooksListProps = {
  books: Book[];
  setBooks: (prevState: Book[]) => void;
};

function BooksList({ books, setBooks }: BooksListProps) {
  function handleDelete(index: number) {
    const newBooks = [...books];
    newBooks.splice(index, 1);
    setBooks(newBooks);
  }

  return (
    <ul>
      {books?.map((book, index) => {
        return (
          <div key={index}>
            <li>
              <span>Book name: {book.bookName}</span>
              <br />
              <span>Book category: {book.category}</span>
              <br />
              <span>Book author: {book.author}</span>
            </li>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        );
      })}
    </ul>
  );
}

export default BooksList;

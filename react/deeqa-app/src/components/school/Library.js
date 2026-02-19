function Library({ books }) {
  return (
    <div>
      <h2>Library</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Library;

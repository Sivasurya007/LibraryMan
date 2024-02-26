import React from 'react';
import '../styles/BookList.scss'; 

function BookList({ books }) {
  const [cart, setCart] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState('');

  const addToCart = (bookTitle) => {
    if (cart.length >= 3) {
      setErrorMessage('You can add only 3 books');
    } else {
      setCart(prevCart => [...prevCart, bookTitle]);
      setErrorMessage('');
    }
  };

  const removeFromCart = (bookTitle) => {
    const updatedCart = cart.filter(item => item !== bookTitle);
    setCart(updatedCart);
  };

  return (
    <div className="book-list">
      <h2>Books ({books.length})</h2>
      <ul>
    {books.map(book => (
        <li key={book.title}>
            <img src={book.imageUrl} alt={book.title} />
            <div className="book-details">
                <h3>{book.title}</h3>
                <p><strong>Author:</strong> {book.author}</p>
                <p><strong>Subject:</strong> {book.subject}</p>
                <p><strong>Publish Date:</strong> {book.publishDate}</p>
                {cart.includes(book.title) ? (
                    <button onClick={() => removeFromCart(book.title)}>Remove from Collections</button>
                ) : (
                    <button onClick={() => addToCart(book.title)}>Add to Collections</button>
                )}
            </div>
        </li>
    ))}
</ul>
      {errorMessage && <p>{errorMessage}</p>}
      <h2>Collections ({cart.length})</h2>
      <ul>
        {cart.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;





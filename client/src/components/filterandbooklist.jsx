import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookList from './BookList';
import Filter from './Filter';
import '../styles/filterandbooklist.scss'; 
import img1 from '../assets/BB.jpg'
import img2 from '../assets/RJ.jpg'
import img3 from '../assets/OIP.jpg'
import img4 from '../assets/MC.jpg'


const FilterAndBookList = () => {
  const initialBooks = [
    {
      title: 'Beauty and the Beast',
      author: 'Shakespeare',
      subject: 'Romance',
      publishDate: '08/02/1967',
      imageUrl: img1 
    },
    {
      title: 'Romeo and Juliet',
      author: 'Shakespeare',
      subject: 'Tragedy',
      publishDate: '09/05/1597',
      imageUrl: img2 
    },
    {
      title: 'Hamlet',
      author: 'Shakespeare',
      subject: 'Tragedy',
      publishDate: '07/06/1603',
      imageUrl: img3 
    },
    {
      title: 'Macbeth',
      author: 'Shakespeare',
      subject: 'Tragedy',
      publishDate: '04/08/1606',
      imageUrl: img4 
    }
  ];
  

  const [books, setBooks] = React.useState(initialBooks);
  const [filteredBooks, setFilteredBooks] = React.useState(initialBooks);
  const [filters, setFilters] = React.useState({
    title: '',
    author: '',
    subject: '',
    publishDate: ''
  });

  React.useEffect(() => {
    let filteredResults = books.filter(book =>
      book.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      book.author.toLowerCase().includes(filters.author.toLowerCase()) &&
      book.subject.toLowerCase().includes(filters.subject.toLowerCase()) &&
      book.publishDate.includes(filters.publishDate)
    );
    setFilteredBooks(filteredResults);
  }, [filters, books]);

  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value
    }));
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="filter-and-booklist-container">
      <h1>Library Management System</h1>
      <button onClick={handleLogout} className="logout-button">Logout</button>
      <Filter filters={filters} onFilterChange={handleFilterChange} />
      <BookList books={filteredBooks} />
    </div>
  );
};

export default FilterAndBookList;



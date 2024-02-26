import React from 'react';
import '../styles/Filter.scss'

function Filter({ filters, onFilterChange }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onFilterChange(name, value);
  };

  return (
    <div className="filter">
      <input
        type="text"
        name="title"
        placeholder="Search by title"
        value={filters.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="author"
        placeholder="Search by author"
        value={filters.author}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="subject"
        placeholder="Search by subject"
        value={filters.subject}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="publishDate"
        placeholder="Search by publish date"
        value={filters.publishDate}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Filter;

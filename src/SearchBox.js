
import React, { useState } from 'react';
import { articles } from './articles';
 import './design.css';

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const search = () => {
    return articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  
  return (
    <div className="App">
      <h1>Search Articles</h1>
      <input className='search-in'
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div className="search-results">
        {search().map((article, index) => (
          <div key={index} className="article">
            <h2 className='title'>{article.title}</h2>
            <p className='date'>{article.date}</p>
            <p>{highlightText(article.content, searchQuery)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Function to highlight matched text
const highlightText = (text, query) => {
  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? <mark key={index}>{part}</mark> : part
  );
};

export default SearchBox;

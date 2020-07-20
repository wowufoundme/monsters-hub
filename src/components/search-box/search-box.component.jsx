import React from 'react';
import './search-box.styles.css';

const SearchBox = props => {
  const { placeholder, handleChange } = props;
  return (
    <div className='search-container'>
      <input 
        type='search'
        placeholder={placeholder}
        className='search'
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBox;
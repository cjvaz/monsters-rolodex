import React from 'react';

// import { Container } from './styles';

export const SearchBox = ({ placeholder, handleChange}) => (
  <input 
  type='search' 
  placeholder={placeholder}
  onChange={handleChange}
/>
)


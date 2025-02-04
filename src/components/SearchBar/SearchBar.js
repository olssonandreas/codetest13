import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDebounce } from 'utils';

const SearchBarInput = styled.input`
  height: 80px;
  width: 100%;
  border: 1px solid rgba(0,0,0,0.3);
  font-size: 20px;
  color: #000;
  font-family: 'Quicksand', sans-serif;
  border-radius: 3px;
  font-style: italic;
  padding: 10px;
  font-weight: 300;
  margin-bottom: 20px;

  &::placeholder{
    font-style: normal;
    color: #000;
  }

  &:focus {
    outline: none;
    border: 1px solid green;
  }
`;

const SearchBar = ({ searchValue, clearSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const search = event => {
    const value = event.target.value;
    setSearchTerm(value);
  }

  useEffect(() => {
    if(debouncedSearchTerm === '') clearSearch();
    if(debouncedSearchTerm.length >= 3) searchValue(debouncedSearchTerm);
    // eslint-disable-next-line
    }, [debouncedSearchTerm]);

  return (
  <SearchBarInput tabIndex="1" onChange={search} value={searchTerm} placeholder="Search for name or office"></SearchBarInput>
  );
};

SearchBar.propTypes = {
  searchValue: PropTypes.func,
  clearSearch: PropTypes.func,
};

export default SearchBar;

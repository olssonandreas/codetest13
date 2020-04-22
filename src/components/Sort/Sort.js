import React, { useState } from 'react';
import styled from 'styled-components';
import { device } from 'utils';

const SortHeader = styled.div`
  width: 100%;
  text-align: center;
  font-size: 12px;
  margin-bottom: 10px;

  @media ${device.laptop} {
    margin-left: auto;
    width: 300px;
  }
`;

const SortByWrapper = styled.div`
  display: flex;
  flex-flow: column;

  @media ${device.laptop} {
    margin-left: auto;
    width: 300px;
  }
`;

 const SortOptions = styled.div`
  display: flex;
  flex-flow: row;
  border: 1px solid rgba(0,0,0,0.3);
  border-radius: 3px;
  width: 100%;
  margin-bottom: 20px;
 `;

const SortOption = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: 0;
  color: ${props => props.active ? 'white;' : 'black;'};
  background-color: ${props => props.active ? 'green;' : 'transparent;'};
  font-family: 'Quicksand', sans-serif;
  &:focus {
    outline: none;
    border: 1px solid green;
  }
  &:nth-of-type(2n) {
    border-left: 1px solid rgba(0,0,0,0.2);
    &:focus {
      border-color: green;
    }
  }
`;

export default ({ sortBy, clearSort }) => {
  const [activeSort, setActiveSort] = useState(null);

  const sort = event => {
    const value = event.target.dataset.value;
    if(value === activeSort) {
      setActiveSort('');
      clearSort();
    } else  {
      setActiveSort(value);
      sortBy(value);
    }
  };

  return (
    <SortByWrapper>
    <SortHeader>Sort by</SortHeader>
    <SortOptions>
      <SortOption
        tabIndex="2"
        onKeyDown={(event) => event.keyCode === '13' ? sort() : null}
        active={activeSort === 'name'}
        data-value="name"
        onClick={sort}>
        Name
      </SortOption>
      <SortOption
        tabIndex="3"
        onKeyDown={(event) => event.keyCode === '13' ? sort() : null}
        active={activeSort === 'office'}
        data-value="office"
        onClick={sort}>
        Office
      </SortOption>
    </SortOptions>
    </SortByWrapper>
  );
};

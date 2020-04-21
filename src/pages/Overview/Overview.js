import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { device } from 'utils';
import { sort } from 'utils';

import Card from 'components/Card';
import Pagination from 'components/Pagination';
import SearchBar from 'components/SearchBar';
import Sort from 'components/Sort';

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const TabCard = styled.div`
  &:focus {
    outline: 1px solid green;
}
`;

const Overview = props => {
  const PAGE_ITEMS = 20;

  const { fetchedData } = props;
  const [data, setData] = useState(fetchedData);
  const [page, setPage] = useState(0);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    if(fetchedData != null) {
      setData(fetchedData);
    }
  }, [fetchedData]);

  useEffect(() => {
    if(data) {
      const people = [ ...data ];
      const start = page ? page * PAGE_ITEMS : 0
      const end = page  ? (page * PAGE_ITEMS) + PAGE_ITEMS : PAGE_ITEMS;
      const displayedPeople = people.slice(start, end);

      setPeople(displayedPeople);
    }
  }, [page, data]);

  if(!fetchedData) return null;

  const goBack = () => page ? setPage(page -1): null;

  const goNext = () => (page * PAGE_ITEMS) + PAGE_ITEMS > data.length ? null : setPage(page + 1);

  const clearSearch = () => {
    setPage(0);
    setData([...fetchedData]);
  };

  const searchValue = value => {
    const search = value.toLowerCase().trim();
    const filter = fetchedData.filter((f) => {
      if(f.office.toLowerCase().indexOf(search) > -1)  return true;
      if(f.name.toLowerCase().indexOf(search) > -1) return true;

      return false;
    });

    setPage(0);
    setData([...filter]);
  };

  const sortBy = value => {
    const sortedData = sort(value, [...fetchedData]);
    setData(sortedData);
  };

  const clearSort = () => {
    setData([...fetchedData])
  };

  return (
  <div data-testid="overview">
    <SearchBar clearSearch={clearSearch} searchValue={searchValue} />
    <Sort sortBy={sortBy} clearSort={clearSort} />
    <CardWrapper>
      { people.map((m,index) =>
        <TabCard key={index} tabIndex="6"><Card {...m}/></TabCard>
      )}
    </CardWrapper>
    <Pagination
      page={page}
      pageAmount={PAGE_ITEMS}
      items={data.length}
      goBack={goBack}
      goNext={goNext}
    />
  </div>
  );
};

export default Overview;

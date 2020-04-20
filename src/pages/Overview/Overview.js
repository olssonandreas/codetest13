import React, { useState, useEffect, Fragment, useCallback } from 'react';
import styled from 'styled-components';
import { device } from 'utils/breakPoints';
import OverviewFetch from './OverviewFetch';

import Card from 'components/Card';
import Pagination from 'components/Pagination';
import SearchBar from 'components/SearchBar';

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
  const PAGE_ITEMS = 100;
  const { fetchedData  } = props;
  const [data, setData] = useState(fetchedData);
  const [loading, setLoading]  = useState(true);
  const [page, setPage] = useState(0);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    if(fetchedData != null) {
      console.log('erwew');
      setLoading(false);
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

  const goBack = () => page ? setPage(page -1): null;

  const goNext = () => (page * PAGE_ITEMS) + PAGE_ITEMS > data.length ? null : setPage(page + 1);

  const clearSearch = () => {
    setPage(0);
    setData(fetchedData);
  }

  const searchValue = value => {
    const search = value.toLowerCase().trim();
    const filter = data.filter((f) => {
      if(f.office.toLowerCase().indexOf(search) > -1)  return true;
      if(f.name.toLowerCase().indexOf(search) > -1) return true;

      return false;
    });

    setPage(0);
    setData(filter);
  };

  if (loading) return 'Loading ninjas...';

  return (
  <Fragment>
    <SearchBar clearSearch={clearSearch} searchValue={searchValue} />
    <Pagination page={page} items={data.length} goBack={goBack} goNext={goNext} />
    <CardWrapper>
      { people.map((m,index) =>
        <TabCard key={index} tabIndex="2"><Card {...m}/></TabCard>
      )}
    </CardWrapper>
    <Pagination page={page} items={data.length} goBack={goBack} goNext={goNext} />
  </Fragment>
  );
};

export default OverviewFetch(Overview);

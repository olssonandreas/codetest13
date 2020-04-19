import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { device } from 'utils/breakPoints';

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

export default () => {
  const [data, setData] = useState(null);
  const [loading, setLoading]  = useState(true);
  const [page, setPage] = useState(0);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        cors: 'no-cors',
      };

      const res = await fetch('https://api.tretton37.com/ninjas', options);
      const json = await res.json();

      setData([ ...json ]);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if(data != null) setLoading(false);
  }, [data]);

  useEffect(() => {
    if(data) {
      const people = [ ...data ];
      const start = page ? page * 100 : 0
      const end = page  ? (page * 100) + 100 : 100;
      const displayedPeople = people.slice(start, end);
      setPeople(displayedPeople);
    }
  }, [page, data]);

  const goBack = () => page ? setPage(page -1): null;

  const goNext = () => (page * 100) + 100 > data.length ? null : setPage(page + 1);

  if (loading) return 'Loading ninjas...';

  return (
  <Fragment>
    <SearchBar />
    <Pagination page={page} items={data.length} goBack={goBack} goNext={goNext} />
    <CardWrapper>
      { people.map(m =>
        <TabCard tabIndex="1"><Card {...m}/></TabCard>
      )}
    </CardWrapper>
    <Pagination page={page} items={data.length} goBack={goBack} goNext={goNext} />
  </Fragment>
  );
};

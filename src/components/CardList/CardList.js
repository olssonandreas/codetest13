import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from 'components/Card';

const CardWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
`;

const CardList = ({ cardItems }) => {
  return (
    <CardWrapper>
    { cardItems.length ? cardItems.map((m,index) =>
      <Card tabIndex="6" key={index} {...m}/>
    ) : 'Search resulted in 0 hits' }
  </CardWrapper>
  );
};

CardList.propTypes = {
  cardItems: PropTypes.array,
};

export default CardList;

import React from 'react';
import styled from 'styled-components';
import { device } from 'utils';

import Card from 'components/Card';

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

export default ({ cardItems }) => {
  return (
    <CardWrapper>
    { cardItems.map((m,index) =>
      <Card tabIndex="6" key={index} {...m}/>
    )}
  </CardWrapper>
  );
};

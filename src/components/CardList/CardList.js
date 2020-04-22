import React from 'react';
import styled from 'styled-components';

import Card from 'components/Card';

const CardWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
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

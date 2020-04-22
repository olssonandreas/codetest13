import React from 'react';
import styled from 'styled-components';

import Image from './Image';
import Social from './Social';

const Card = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  flex-flow: column;
  border-radius: 3px;
  background-color: white;
  padding: 20px;
  border: 1px solid rgba(0,0,0, 0.3);

  &:focus {
    outline: none;
    border-color: green;
  }
`;

const Text = styled.div`
  font-size: 22px;
  margin-top: 10px;
`;

export default ({ name, tabIndex, imagePortraitUrl, office, gitHub, linkedIn, twitter }) => {
  return (
    <Card tabIndex={tabIndex}>
      <Image name={name} imagePortraitUrl={imagePortraitUrl} ></Image>
      <Text>{ name }</Text>
      <Text>{ office }</Text>
      <Social gitHub={gitHub} twitter={twitter} linkedIn={linkedIn} />
    </Card>
  );
};

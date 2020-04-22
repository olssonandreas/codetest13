import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { device } from 'utils';

import Image from './Image';
import Social from './Social';

const CardWrapper = styled.div`
  height: 400px;
  display: flex;
  max-width: 100%;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 100%;
  align-items: center;
  flex-flow: column wrap;
  border-radius: 3px;
  background-color: white;
  padding: 20px;
  margin-top: 20px;
  border: 1px solid rgba(0,0,0, 0.3);

  @media ${device.tablet} {
    max-width: calc(50% - 10px);
    flex-basis: calc(50% - 10px);
    margin-right: 20px;
    &:nth-of-type(2n) {
      margin-right: 0;
    }
  }

  @media ${device.laptop} {
    max-width: calc(25% - 15px);
    flex-basis: calc(25% - 15px);
    margin-right: 20px;
    &:nth-of-type(2n) {
      margin-right: 20px;
    }
    &:nth-of-type(4n) {
      margin-right: 0;
    }
  }
  &:focus {
    outline: none;
    border-color: green;
  }
`;

const Text = styled.div`
  font-size: 22px;
  margin-top: 10px;
`;

const Card = ({ name, tabIndex, imagePortraitUrl, office, gitHub, linkedIn, twitter }) => {
  return (
  <CardWrapper tabIndex={tabIndex}>
    <Image name={name} imagePortraitUrl={imagePortraitUrl} ></Image>
    <Text>{ name }</Text>
    <Text>{ office }</Text>
    <Social gitHub={gitHub} twitter={twitter} linkedIn={linkedIn} />
  </CardWrapper>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  tabIndex: PropTypes.string,
  imagePortraitUrl: PropTypes.string,
  office: PropTypes.string,
  github: PropTypes.string,
  linkedIn: PropTypes.string,
  twitter: PropTypes.string,
};

export default Card;

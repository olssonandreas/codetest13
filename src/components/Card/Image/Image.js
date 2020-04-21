import React from 'react';
import styled from 'styled-components';
import placeholder from './placeholder.png';

const ImageWrapper = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 149px;
  height: 199px;
  display: block;
  margin: 0 auto;
`;

export default ({ imagePortraitUrl, name }) => {
  // TODO
  if (!imagePortraitUrl) return <img src={placeholder} alt="placeholder"></img>

  return (
    <ImageWrapper>
      <Image alt={`Photo off ${name}`} src={imagePortraitUrl}></Image>
      </ImageWrapper>
  );
};

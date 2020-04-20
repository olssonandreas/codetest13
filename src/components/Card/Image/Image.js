import React from 'react';
import styled from 'styled-components';

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

export default ({ imagePortraitUrl }) => {
  // TODO
  if (!imagePortraitUrl) return 'Dummy image';

  return (
    <ImageWrapper>
      <Image src={imagePortraitUrl}></Image>
      </ImageWrapper>
  );
};

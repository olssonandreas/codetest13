import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import placeholder from './placeholder.png';

const ImageWrapper = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
`;

const Photo = styled.img`
  width: 149px;
  height: 199px;
  display: block;
  margin: 0 auto;
`;

const Image = ({ imagePortraitUrl, name }) => {
  if (!imagePortraitUrl) return <img src={placeholder} alt="placeholder"></img>

  return (
  <ImageWrapper>
    <Photo alt={`Photo off ${name}`} src={imagePortraitUrl}></Photo>
  </ImageWrapper>
  );
};

Image.propTypes = {
  imagePortraitUrl: PropTypes.string,
  name: PropTypes.string,
};

export default Image;

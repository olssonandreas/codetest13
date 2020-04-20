import React from 'react';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;


const buttonMixin = () => `
  cursor: pointer;
  width: 100px;
  font-size: 14px;
  text-decoration: underline;
`;

const LeftButton = styled.div`
  margin-right: auto;
  visibility: ${props => props.hide ? 'hidden;' : 'visible;'}
  ${buttonMixin}
`;

const RightButton = styled.div`
  margin-left: auto;
  text-align: right;
  visibility: ${props => props.hide ? 'hidden;' : 'visible;'}
  ${buttonMixin}
`;

const PageCounter = styled.div`
  font-size: 14px;
`;

export default ({ goBack, goNext, page, items }) => {
  if(items === 0) return null;

  const pageLength = () => {
    if(!items) return 0;

    if(items <= 100) return 1;

    if(items === 0) return Math.round(items.length / 100);

    return Math.round((items / 100) + 1);
  };

  const pages = pageLength();

  return (
    <PaginationWrapper>
      <LeftButton hide={page === 0} onClick={goBack}>Previous page</LeftButton>
      <PageCounter>{ page + 1 } / { pages }</PageCounter>
      <RightButton hide={page + 1 === pages} onClick={goNext}>Next page</RightButton>
    </PaginationWrapper>
  );
};

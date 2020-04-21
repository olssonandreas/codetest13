import React, { useMemo } from 'react';
import styled from 'styled-components';

import { calcPageLength } from 'utils';

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
  background-color: transparent;
  border: 0;
  padding: 0;
  font-size: 14px;
  &:focus {
    outline: 0;
    text-decoration: underline;
    color: green;
  }
`;

const LeftButton = styled.button`
  margin-right: auto;
  visibility: ${props => props.hide ? 'hidden;' : 'visible;'}
  ${buttonMixin}
`;

const RightButton = styled.button`
  margin-left: auto;
  text-align: right;
  visibility: ${props => props.hide ? 'hidden;' : 'visible;'}
  ${buttonMixin}
`;

const PageCounter = styled.div`
  font-size: 14px;
`;

export default ({ goBack, goNext, page, items, bottom }) => {
  if(items === 0) return null;

  const pageLength = useMemo(() => {
    return calcPageLength(items, 20);
  },[items]);

  return (
    <PaginationWrapper>
      <LeftButton
        tabIndex={bottom ? '7' : '4'}
        onKeyDown={(event) => event.keyCode === '13' ? goBack() : null}
        hide={page === 0}
        onClick={goBack}>
        Previous page
      </LeftButton>
      <PageCounter>{ page + 1 } / { pageLength }</PageCounter>
      <RightButton
        tabIndex={bottom ? '8' : '5'}
        hide={page + 1 === pageLength}
        onClick={goNext}
        onKeyDown={(event) => event.keyCode === '13' ? goNext() : null}>
        Next page
      </RightButton>
    </PaginationWrapper>
  );
};

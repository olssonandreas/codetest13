import React, { useMemo } from 'react';
import styled from 'styled-components';

import { calcPageLength } from 'utils';

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const buttonMixin = () => `
  cursor: pointer;
  width: 33%;
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

export default ({ goBack, goNext, page, items, pageAmount }) => {
  if(items <= pageAmount) return null;

  const pageLength = useMemo(() => {
    return calcPageLength(items, pageAmount);
  },[items, pageAmount]);


  return (
    <PaginationWrapper data-testid="pagination">
      <LeftButton
        tabIndex="9"
        onKeyDown={(event) => event.keyCode === '13' ? goBack() : null}
        hide={page === 0}
        onClick={goBack}>
        Previous page
      </LeftButton>
      <PageCounter data-testid="counter">{ page + 1 } / { pageLength }</PageCounter>
      <RightButton
        tabIndex="10"
        hide={page + 1 === pageLength}
        onClick={goNext}
        onKeyDown={(event) => event.keyCode === '13' ? goNext() : null}>
        Next page
      </RightButton>
    </PaginationWrapper>
  );
};

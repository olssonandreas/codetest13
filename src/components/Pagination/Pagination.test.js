import React from 'react';
import { render } from '@testing-library/react';
import Pagination from './Pagination';

test('Pagination renders correct page number', () => {
  const { getByText } = render(<Pagination page={0} pageAmount={20} items={33} />);

  expect(getByText('1 / 2')).toBeInTheDocument();
});

test('Pagination does not render if items less than pageAmount', () => {
  const { queryByTestId } = render(<Pagination page={0} pageAmount={20} items={19} />);

  expect(queryByTestId('pagination')).toBe(null);
});

import React from 'react';
import { render } from '@testing-library/react';
import Overview from './Overview';


test('Overview component renders overview when receiving data', () => {
  const mockedData = [
    {
      name: 'Name',
      office: 'Office',
    }
  ];

  const { queryByTestId } = render(<Overview fetchedData={mockedData} />);
  const overviewElement = queryByTestId('overview');

  expect(overviewElement).toBeInTheDocument();
});

test('Overview component renders social items if links provided', () => {
  const mockedData = [
    {
      name: 'Name',
      office: 'Office',
      gitHub: 'github',
      twitter: 'twitter',
      linkedIn: 'linkedin'
    }
  ];
  const { queryByTestId } = render(<Overview fetchedData={mockedData} />);
  const github = queryByTestId('github');
  const twitter = queryByTestId('twitter');
  const linkedIn = queryByTestId('linkedin');

  expect(github).toBeInTheDocument();
  expect(twitter).toBeInTheDocument();
  expect(linkedIn).toBeInTheDocument();
});

test('Overview component cards does not render social items if no links provided', () => {
  const mockedData = [
    {
      name: 'Name',
      office: 'Office',
    }
  ];
  const { queryByTestId } = render(<Overview fetchedData={mockedData} />);
  const github = queryByTestId('github');
  const twitter = queryByTestId('twitter');
  const linkedIn = queryByTestId('linkedin');

  expect(github).toBe(null)
  expect(twitter).toBe(null);
  expect(linkedIn).toBe(null);
});

import React from 'react';
import { render, act, waitForElement } from '@testing-library/react';
import OverviewFetch from './OverviewFetch';

const MockedComponent = () => (
  <div data-testid="test">Test</div>
);

test('Overview components renders loading before fetch has resolved', async () => {
  global.fetch = jest.fn().mockImplementation(() => Promise.resolve( { json: () => [''], ok: true }));

  await act(async () => {
    const Component = OverviewFetch(MockedComponent);
    const { queryByTestId }  = render(<Component/>);
    expect(queryByTestId('loading')).toBeInTheDocument();
  });
});

test('Overview components renders error when no sucessful response', async () => {
  global.fetch = jest.fn().mockImplementation(() => Promise.resolve( { json: () => [''], ok: false}));

  await act(async () => {
    const Component = OverviewFetch(MockedComponent);
    const { queryByTestId }  = render(<Component/>);

    await waitForElement(() => queryByTestId('error'));

    expect(queryByTestId('error')).toBeInTheDocument();
  });
});

test('Overview components renders wrapped component if sucessful response', async () => {
  global.fetch = jest.fn().mockImplementation(() => Promise.resolve({ json: () => [''], ok: true }));

  await act(async () => {
    const Component = OverviewFetch(MockedComponent);
    const { queryByTestId }  = render(<Component/>);

    await waitForElement(() => queryByTestId('test'));

    expect(queryByTestId('test')).toBeInTheDocument();
  })
});



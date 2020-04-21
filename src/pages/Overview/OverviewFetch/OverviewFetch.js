import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import loading from './loading.svg';

const Loading = styled.div`
  display: flex;
  height: calc(100vh - 100px);
  flex-flow: column;
  align-items: center;
  justify-content: center;
  img  {
    margin-top: 10px;
    width: 50px;
    display: block;
  }
`;
export default Component => () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        cors: 'no-cors',
      };

      try {
        const res = await fetch('https://api.tretton37.com/ninjas', options);
        if(res.ok) {
          const data = await res.json();
          setData(data);
        } else {
          setError('Failed to fetch')
        }
      } catch(e) {
        setError('Failed to fetch');
      }
    };

    fetchData();
  }, []);

  if(error) return <div data-testid="error">{error}</div>;

  if(!data.length) {
    return (
    <Loading data-testid="loading">
      <div>Loading ninjas...</div>
      <img src={loading} alt="loading"></img>
    </Loading>
    );
  }

  console.log('component', data);

  return (<Component fetchedData={data} />);
};



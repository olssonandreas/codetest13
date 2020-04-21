import React, { useEffect, useState } from 'react';

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
  if(!data.length) return <div data-testid="loading">Loading ninjas...</div>;


  return (<Component fetchedData={data} />);
};



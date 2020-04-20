import React, { useEffect, useState } from 'react';

export default Component => props => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        cors: 'no-cors',
      };

      const res = await fetch('https://api.tretton37.com/ninjas', options);
      const json = await res.json();

      setData([ ...json ]);
    };

    fetchData();
  }, []);
  return (<Component fetchedData={data} />);
};



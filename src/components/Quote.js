import React, { useState, useEffect } from 'react';

import './Quete.css';

function Fetch() {
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=learning',
          {
            method: 'GET',
            withCredentials: true,
            headers: {
              'X-Api-Key': 'aZ+ufIZpdb42sBO6B2Sa1w==lUNUripBWcwGzAhR',
              'Content-Type': 'application/json',
            },
          },
        );
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [setData, setLoading]);
  if (Error) return <div>Something went wrong!</div>;
  if (Loading) return <div>Loading the Data...</div>;
  return (
    <div className="quoteDiv">
      <ul>
        {data.map((item) => (
          <li key={item.quote} className="quote-li">
            <p className="p-quote">{item.quote}</p>
            <br />
            <p className="p-author">{item.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fetch;

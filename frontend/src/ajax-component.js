import React, { useState, useEffect } from 'react';

const CatData = () => {
  const [catData, setCatData] = useState([]);
  const [fetchDataOnButtonClick, setFetchDataOnButtonClick] = useState(false);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const response = await fetch('http://localhost:3001/cat-data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCatData(data);
        console.log('Fetched cat data:', data);
        setNumber(prevNumber => prevNumber + 1); 
      } catch (error) {
        console.error('Error fetching cat data:', error);
      }
    };

    if (fetchDataOnButtonClick) {
      fetchCatData();
      const intervalId = setInterval(fetchCatData, 10000); 
      return () => clearInterval(intervalId); 
    }
  }, [fetchDataOnButtonClick]);

  const handleButtonClick = () => {
    setFetchDataOnButtonClick(true);
  };

  return (
    <div>
      <h1>Cat Information</h1>
      {!fetchDataOnButtonClick && <button onClick={handleButtonClick}>Fetch Cat Data</button>}
      <ul>
        {catData.map(cat => (
          <li key={cat.id}>
            <h2>{cat.name}</h2>
            <p><strong>Breed:</strong> {cat.breed}</p>
            <p><strong>Age:</strong> {cat.age}</p>
          </li>
        ))}
      </ul>
      {fetchDataOnButtonClick && <p>Number: {number}</p>}
    </div>
  );
};

export default CatData;

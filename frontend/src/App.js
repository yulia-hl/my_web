import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function CatInfo({ cat }) {
  const [details, setDetails] = useState(null);

  const fetchDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/cat/${cat.id}`);
      setDetails(response.data);
    } catch (error) {
      console.error('Error fetching cat details:', error);
    }
  };

  useEffect(() => {
    setDetails(null);
  }, [cat]);

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{cat.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Breed: {cat.breed}</h6>
        <p className="card-text">Age: {cat.age}</p>
        <button className="btn btn-primary" onClick={fetchDetails}>Show Details</button>
        {details && <p className="card-text mt-3">{details.description}</p>}
      </div>
    </div>
  );
}

function App() {
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    try {
      const response = await axios.get('http://localhost:3001/cats');
      setCats(response.data);
    } catch (error) {
      console.error('Error fetching cats:', error);
    }
  };

  useEffect(() => {
    fetchCats();
    const intervalId = setInterval(fetchCats, 5000); 
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Cat Information</h1>
      <div className="row">
        {cats.map(cat => (
          <div className="col-md-4" key={cat.id}>
            <CatInfo cat={cat} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

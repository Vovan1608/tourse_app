import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

// here is info for app or in src/tours_info.js
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTourse] = useState([]);

  const removeTour = id => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTourse(newTours);
  }

  const fetchTourse = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTourse(tours);
    } catch(e) {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTourse();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (!tours.length) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button onClick={fetchTourse} className="btn">refresh</button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App

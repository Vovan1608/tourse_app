import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTourse] = useState([]);

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

  if(loading) {
    return (
      <main>
        <Loading/>
      </main>
    );
  }
  return (
    <main>
      <Tours/>
    </main>
  );
}

export default App

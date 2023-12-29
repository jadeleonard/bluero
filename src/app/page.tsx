'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [fetchset, setFetchset] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/bluero');
        if (response.status !== 200) {
          throw new Error('Error fetching data');
        } else {
          setFetchset(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
    

    fetchData();
  }, []);

  return (
    <div>
        {fetchset.map((links,index) => (
            <div key={index}>
              <p>{links.content}</p>
              <p>{links.herocta}</p>
              <p>{links.herodescription}</p>
            </div>
        ))}
    </div>
  );
};

export default App;

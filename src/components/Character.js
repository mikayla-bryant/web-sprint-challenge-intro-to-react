// Write your Character component here
import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Character() {
  const [characters, setCharacterList] = useState([]);

  useEffect(() => {
    //Requesting Data from Star Wars API
    axios
      .get('https://swapi.dev/api/people/')
      .then((response) => {
        console.log('success!', response);
        setCharacterList(response.data.results);
      })
      .catch((error) => {
        console.log(
          'Whoops. There was an error retrieving your data. Please check your work.',
          error
        );
      });
  }, []);
  console.log(characters);
  return (
    <div>
      {characters.map((item) => {
        return <h2>{item.name}</h2>;
      })}
    </div>
  );
}

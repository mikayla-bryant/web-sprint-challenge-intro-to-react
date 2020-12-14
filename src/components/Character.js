// Write your Character component here
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
const Card = styled.div`
  background-color: #faf2cd;
  width: 40%;
  margin: auto auto 20px auto;
  padding: 5%;
  font-family: 'Piazzolla', serif;
`;

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
        return (
          <Card>
            <h2>{item.name}</h2>
            <p>
              This character is of the {item.gender} gender, was born in{' '}
              {item.birth_year}, and has {item.eye_color} eyes.
            </p>
          </Card>
        );
      })}
    </div>
  );
}

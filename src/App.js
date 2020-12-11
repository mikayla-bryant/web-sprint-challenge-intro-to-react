import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacterList] = useState([]);
    
    useEffect(() =>{
        //Requesting Data from NASA's API
        axios.get("https://swapi.dev/api/people/")
             .then((response) => {
                 console.log('success!', response);
                 setCharacterList(response.data.results);
  
             })
             // 
             .catch((error) => {
                 console.log("Whoops. There was an error retrieving your data. Please check your work.", error);
             })
    }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;

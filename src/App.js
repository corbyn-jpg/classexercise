import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [dog, setDog] = useState([]);


  const fetchDog = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      setDog(response.data.message);
    })
    .catch(error => {
      console.log(error);
    })
  }

  useEffect(() => {
    fetchDog();
  }, []);
  
  return (
    <div >
      <h1>Random Dogs Now!!!!</h1>
      <div>
        <img src={dog} alt="Random Dog" width="700px" height="700px" />
      </div>
      <div className="button-container">
        <button onClick={fetchDog}>Generate Random Dog</button>
      </div>
    </div>
  );
}
export default App;

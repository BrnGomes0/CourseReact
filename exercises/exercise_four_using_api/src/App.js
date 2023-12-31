import React from 'react';
import './App.css';
import { 
  useState, 
  useEffect,
} from 'react';
import Axios from 'axios';

function App() {
  const [generatedExcuse, setgeneratedExcuse] = useState("");
  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
    .then((res) => {
      setgeneratedExcuse(res.data[0].excuse);
    });
  }
  return(
    <div className='App'>
      <h1>Generate An Excuse</h1>
      <button onClick={() => fetchExcuse("party")}>Party</button>
      <button onClick={() => fetchExcuse("family")}>Family</button>
      <button onClick={() => fetchExcuse("office")}>Office</button>
      <p>{generatedExcuse}</p>
    </div>
  );
};

export default App;

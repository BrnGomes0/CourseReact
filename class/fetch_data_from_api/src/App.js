import './App.css';
import Axios from "axios"
import { useState, useEffect } from "react"

  // First Form
  // fetch("https://catfact.ninja/fact")
  // Converting Json for Object in JavaScript
  // .then((res) => res.json())
  // .then((data) => {
  //   console.log(data)
  // });
  // Second Form

function App() {
  const [catfact, setCatFact] = useState(""); 

  useEffect(() => {
    Axios.get("https://catfact.ninja/fact")
  .then((res) => {
    setCatFact(res.data.fact)
  });
  }, []);

  return (
    <div className='App'>
      <button onClick={}>Generate Cat Fact</button>
      <p>{catfact}</p>
    </div>
  );
}


export default App;
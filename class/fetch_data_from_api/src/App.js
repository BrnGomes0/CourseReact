import React from 'react';
import './App.css';
import {
  useState, 
  useEffect,
} from 'react';
import Axios from "axios";


function App() { 
  // First Way
  /*
  fetch("https://catfact.ninja/fact").
  then((res) => res.json()).
  then((data) => {
  console.log(data);
}); */
  // const [catFact, setcatFact] = useState("");
  // Second Way using Axios without UseEffect (Loop Infinte)
//  Axios.get("https://catfact.ninja/fact")
//  .then((res) => {
//   setcatFact(res.data.fact); // fact beacuse in the object have a attribute named fact
//  })
// const fecthCat = () => {
//   Axios.get("https://catfact.ninja/fact")
//   .then((res) => {
//     setcatFact(res.data.fact);
//   })
// };
// useEffect(() => {
//   fecthCat();
// }, []); // Go exexute when the component mounted
  // return(
  //   <div className='App'>
  //     <button onClick={fecthCat}> Generate Cat Fact </button>
  //     <p>{catFact}</p>
  //   </div>
  // );
  const [name, setName] = useState("");
  const [predictedObcjet, setpredictedAge ] = useState({}); // That changed object
  const fetData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setpredictedAge (res.data.age);
      console.log(res.data);
    })
  } 
  return(
    <div className='App'>
      <input placeholder='Ex. Pedro...' onChange={(event) => {
        setName(event.target.value);
      }}/>
      <button onClick={fetData}> Predict Object </button>
      <h1>Name: {predictedObcjet?.name}</h1>
      {/*Thanks to the optional Chaining, you can simply enter a ? 
      between the property name and the period before the next property.
      With this, the return will be undefined instead of throwing an error.*/} 
      <h1>Count: {predictedObcjet?.count}</h1>
      <h1>Predicted Age: {predictedObcjet?.age}</h1>
    </div>
  );
};
export default App;
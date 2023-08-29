import './App.css';

// Using If and Else
// const age = 15;
// if (age => 18){
//   console.log("IS OVER AGE!");
// }else{
//   console.log("IS UNDER AGE!");
// }

// Using Ternary Operator

// age >= 18 ? console.log("IS OVER AGE!") : console.log("IS UNDER AGE!")
// Condition            IF (True)               Else (False) 

function App() {
  const age = 20;
  const isGreen = true;
  
  return (
    <div className='App'>
      {age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
      <h1 style={{color: isGreen ? "green" : "red"}}> THIS HAS COLOR </h1>

      </div>
  );
}

export default App;

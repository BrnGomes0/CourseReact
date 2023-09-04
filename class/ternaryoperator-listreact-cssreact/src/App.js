import React from 'react';
import styles from './App.module.css';
import { User } from '../src/User'

// Css module files

// function App() {
//   return (
//     <div className={styles.App}>
//       <h1 className={styles.name}> Bruno </h1>
//     </div>
//   );
// }

// Ternary Operator command in React/JS

// Example without TernaryOperator
// const age = 15;
// if (age >= 18) {
//   console.log("IS OVER AGE!");
// }else{
//   console.log("IS UNDER AGE");
// }
// Example with TernaryOperator
// age >= 18 ? console.log("hehehehe") : console.log("hehehehehehehe")


// function App() {
  // const age = 1;
  // const isGreen = true;
  // if (age >= 18){
  //   return <h1>IS OVER AGE!</h1>
  // }else{
  //   return <h1>IS UNDER AGE!</h1>
  // }
  // First Example
  //  return age >= 18 ? <h1> IS OVER AGE!</h1> : <h1>IS UNDER AGE!</h1>
  // Second Example
  
  // ? is equals a if command and : is equals a else comand
  // && is equals a if command
  // return(
  // <div className='App'>
  //   {age >= 18 ? <h1>OVER AGE!</h1> : <h1>UNDER AGE!</h1>}
  //   <h1 style={{color: isGreen ? "green" : "red"}}> THIS HAS COLOR </h1>
  //   {isGreen && <button> THIS IS A BUTTON </button>}
  // </div>
  // );
  // }

  // List in React

  // function App() {
  //   const name = ["Pedro", "Jake", "Jessica", "Mike", "Dustin", "Lucas"]
  //   return <div className="App">
  //     {name.map((name, key) => {
  //       return <h1 key={key}>{name}</h1>
  //     })}
  //   </div>
  // }
  
  function App() {
    const users = [
      {name: "Pedro", age: 21},
      {name: "Jake", age: 25},
      {name: "Jessica", age: 45},
    ];
    
    return (
      <div className="App">
        {users.map((user) => {
          return (
            <User name={user.name} age={user.age}/>
          );
        })}
      </div>
    );
  }

export default App;
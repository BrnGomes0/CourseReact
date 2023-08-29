import './App.css';

function App() {
  return <div className='App'>
      <User name="Bruno" age={18} email="brunownog05@gmail.com"/>
      <User name="Pedro" age={21} email="pedro@tech.com"/>
      <User name="Luizinho" age={17} email="luizBosch@gmail.com"/>
      <User name="Aprigio" age={18} email="prijas@gmail.com"/>
    </div>
}

const props = {
  name: "Bruno",
  age: 18,
  email: "brunownog05@gmail.com"
}
  const GetName = () =>{
    return "Bruno"
  }; // This is a JavaScriptFunction

  const GetNameComponent = () =>{
    return <h1>Bruno</h1>
  }; // This is a react component. React Component always return a tags in HTML

  const User = (props) => {
    return (
      <div>
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
        <h3>{props.email}</h3>
      </div>
    );
  };  

export default App;

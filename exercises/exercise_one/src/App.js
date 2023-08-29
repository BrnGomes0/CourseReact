import './App.css';

function App() {
  return (
    <div className='App'>
      <Job salary={9000} position="Senior SDE" company="Amazon"/>
      <Job salary={2000} position="Project Manager" company="Google"/>
      <Job salary={10000} position="Junior SDE" company="Apple"/>
    </div>
  )
}

const Job = (props) =>{
  return (
    <div>
      <h2>{props.salary}</h2>
      <h2>{props.positions}</h2>
      <h2>{props.company}</h2>
    </div>
  );
}
export default App;

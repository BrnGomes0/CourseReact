import './App.css';
import {Text} from '../src/Text';
import {useState, useEffect} from 'react'


export function App() {
  const [showText, setShowText] = useState(false);

  return(
    <div className='App'>
      <button onClick={() => {
        setShowText(!showText);
      }}>
        Show Text
      </button>
      {showText  && <Text/>}
    </div>
  );
}
/*
  Have Three stages of Component

  Mounting
  Updating
  Unmounting

  UseEffect --> Control the stage of LifeCycle component
*/
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {Home} from '../src/pages/Home';
import {Menu} from '../src/pages/Menu';
import {Contract} from '../src/pages/Contract';
import { Navbar } from './pages/Navbar';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/contact' element={<Contract/>}/>
          {/*Página de erro. Não encontrada*/}
          <Route path='*' element={<h1> PAGE NOT FOUND! </h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Menu } from './pages/Menu';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/contact' element={<Contact/>}/>
          {/*Página de erro. Não encontrada*/}
          <Route path='*' element={<h1> PAGE NOT FOUND! </h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

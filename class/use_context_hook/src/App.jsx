import React from 'react'
import './App.css'
import { Contact } from './pages/Contract'
import { Home } from './pages/Home'
import { Navbar } from './pages/Navbar'
import { Profile } from './pages/Profile'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { 
  useState,
  createContext,
 } from 'react'

export const AppContext = createContext();

function App() {
  const [username, setUserName] = useState("BrunoBosch"); 
  return (
    <div className='App'>
      <AppContext.Provider value={{username, setUserName}}> {/*Fornecer dados para os componentes dentro dele. Os componentes que estão
      dentro do AppContext.Provider são os componentes que irão receber os dados*/}
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/contact' element={<Contact/>}/>
          {/*Página de erro. Não encontrada*/}
          <Route path='*' element={<h1> PAGE NOT FOUND! </h1>}/>
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App

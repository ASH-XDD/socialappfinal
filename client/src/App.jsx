import React from 'react';
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
function App() {


  return (
   <>
  
  <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      
    </Routes>

 
   </>
  )
}

export default App

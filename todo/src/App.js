import React from 'react'
import {Header}  from './components/Header'
import Footers from './components/Footer';
import { Register } from './components/Register';
import "./App.css"
import { Route,Routes } from 'react-router-dom';
import { Login } from './components/Login';
const App = () => {
  return (
<>
  <Header/>
  <Routes>
    <Route exact path = "/login" element = {<Login/>}/>
    <Route exact path = "/register" element = {<Register/>}/>
  </Routes>
  </>
  )
}

export default App
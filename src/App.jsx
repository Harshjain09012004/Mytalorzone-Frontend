import React, { useState } from 'react';
import './App.css'
import './media.css'
import Landing from './pages/landingPage';
import { ContextProvider } from './providers/userContext.jsx'
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import SignUp from './components/authentication/signup.jsx';
import Login from './components/authentication/login.jsx';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        {/* <Route path='/account/:subpage?' element={<AccountPage/>}/>
        <Route path='/account/:subpage/:action' element={<AccountPage/>}/> */}
      </Routes>
    </ContextProvider>
  )
}

export default App
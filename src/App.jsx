import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import ForgotPassword from '../Pages/ForgotPassword';
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';

const App = () => {
  const[token,setToken]=useState("")
  return (
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login setToken={setToken}/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/url-shortener' element={<Profile token={token}/>}/>
        </Routes>
      </div>
  );
};

export default App;
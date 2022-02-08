import React from 'react';

import Protected from './components/Protected';
import MainPage from './components/MainPage';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function MainRouter() {


  return (
    <>
    
    <Router>
    
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/protected" element={<Protected />}></Route>
      
    </Routes>
  </Router>
    </>
  );
}

export default MainRouter;

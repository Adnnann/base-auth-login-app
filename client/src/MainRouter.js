import React from 'react';
import Protected from './components/Protected';
import MainPage from './components/MainPage';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function MainRouter({location}) {

  return (
    <>
    
    <Router>
    <Header location={location} /> 
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/protected" element={<Protected />}></Route>
      </Routes>
  </Router>
    </>
  );
}

export default MainRouter;

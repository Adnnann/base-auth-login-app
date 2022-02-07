import React from 'react';

import Protected from './components/Protected';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';


function App() {


  return (
    <>
    
    <Router>
    
    <Routes>
    <Route path="/" element={<Home />}></Route>
      <Route path="/protected" element={<Protected />}></Route>
      
    </Routes>
  </Router>
    </>
  );
}

export default App;

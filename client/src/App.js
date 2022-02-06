import React from 'react';
import { createUser, signinUser, signoutUser } from './features/usersSlice';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {

  const user = {
    name:"Emircscs",
    email:"testsccsac@lipo.com",
    password:"123456"
  }

  const signinData = {
    email:"test@lipo.com",
    password:"123456"
  }
  

  const dispatch = useDispatch()
  return (
    <div className="App">
    <button onClick={()=>dispatch(createUser(user))}>Testing create user</button>
    <button onClick={()=>dispatch(signinUser(signinData))}>Testing login</button>
    <button onClick={()=>dispatch(signoutUser(user))}>Testing signout</button>
     <h1>Hello</h1>
    </div>
  );
}

export default App;

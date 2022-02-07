import { createUser, getUser, signinUser, signoutUser, userPage } from '../features/usersSlice'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const Home = () => {
    const selector = useSelector(getUser)
    const navigate = useNavigate()
  
  const user = {
    name:"Emircscs",
    email:"testsccsac@lipo.com",
    password:"123456"
  }
  
    const signinData = {
      email:"test@lipo.com",
      password:"123456"
    }
    
    const protectedRoute = () =>{
      //dispatch(userPage())
      navigate('/protected')
    }
  
    const dispatch = useDispatch()
    return(
        <div className="App">
   <button onClick={()=>dispatch(createUser(user))}>Testing create user</button>
    <button onClick={()=>dispatch(signinUser(signinData))}>Testing login</button>
    <button onClick={()=>dispatch(signoutUser(user))}>Testing signout</button> 
    <button onClick={()=>console.log(selector)}>Get registered user</button>
    <button onClick={()=>protectedRoute()}>Testing protected route</button> 
     <h1>Hello</h1>
    </div>
    )
}

export default Home
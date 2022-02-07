import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
export const createUser = createAsyncThunk('user/registeredUser', async(user)=>{
return await axios.post(`/user/register`,user, {
    //body: user,
      headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    }
  })
  .then(response=>response.data)
  .catch(e=>e)
  //return response.data;
})
export const signinUser = createAsyncThunk('users/logedInUser', async(userData)=>{
  const response = await axios.post('/auth/signin', {
  data: userData,
   headers:{
    'Accept':'application/json',
    'Content-Type':'application/json'
  }
})

return response.data

})

export const signoutUser = createAsyncThunk('users/user', async()=>{
  const response = await axios.post('/auth/signout')
  return response.data
})

export const userPage = createAsyncThunk('users/protected', async()=>{
  return axios.get('/protected', { 
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(response=>response.data)
  .catch(err=>console.log(err))
})

const initialState = {
  registeredUser:{},
  logedInUser:{},
  signedOut:{},
  userPage:{}
};


export const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [createUser.fulfilled]: (state, {payload}) => {
      return {...state, registeredUser:payload}
    },
    [signinUser.fulfilled]: (state, {payload}) => {
      return {...state, logedInUser:payload}
    },
    [signoutUser.fulfilled]: (state, {payload}) => {
      return {...state, signedOut:payload}
    },
    [userPage.fulfilled]: (state, {payload}) => {
      return {...state, userPage:payload}
    }
  }
    
});

export const getUser = (state) => state.users.registeredUser
export const getUserPage = (state) => state.users.userPage
export default usersSlice.reducer
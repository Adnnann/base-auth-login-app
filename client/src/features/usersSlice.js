import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
export const createUser = createAsyncThunk('user/register', (user)=>{
  axios.post(`/user/register`,{
    data: user,
      headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    }
  })
  .then(response=>response.data)
  .catch(err=>console.log(err))
})
export const signinUser = createAsyncThunk('auth/signin', async(userData)=>{
  await axios.post('/auth/signin', {
  data: userData,
   headers:{
    'Accept':'application/json',
    'Content-Type':'application/json'
  }
})
.then(response=>response.data)
.catch(err=>console.log(err))
})

export const signoutUser = createAsyncThunk('users/user', async()=>{
  await axios.post('/auth/signout')
  .then(response=>response.data)
  .catch(err=>console.log(err))
})

const initialState = {
  user:{}
};


export const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [createUser.fulfilled]: (state, {payload}) => {
      return {...state, payload}
    }
  }
    
});

export const getUser = (state) => state.users.user
export default usersSlice.reducer
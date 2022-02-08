import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
export const createUser = createAsyncThunk('user/registeredUser', async(user)=>{
return await axios.post(`/user/register`,user, {
      headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    }
  })
  .then(response=>response.data)
  .catch(error=>error)
})

export const signinUser = createAsyncThunk('users/logedUser', async(userData)=>{
  return await axios.post('/auth/signin',userData, {
      headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    }
  })
  .then(response=>response.data)
  .catch(error=>error)
})

export const signoutUser = createAsyncThunk('users/user', async()=>{
  const response = await axios.post('/auth/signout')
  return response.data
})

export const userToken = createAsyncThunk('users/protected', async()=>{
  return axios.get('/protected', { 
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(response=>response.data)
  .catch(error=>error.message)
})

const initialState = {
  registeredUser:{},
  loggedUser:{},
  signedOut:{},
  userToken:{},
  showErrors:{}
};


export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers:{
    showErrors:(state, action) =>{
      state.showErrors = action.payload
    }
  },
  extraReducers: {
    [createUser.fulfilled]: (state, {payload}) => {
      return {...state, registeredUser:payload}
    },
    [signinUser.fulfilled]: (state, {payload}) => {
      return {...state, loggedUser:payload}
    },
    [signoutUser.fulfilled]: (state, {payload}) => {
      return {...state, signedOut:payload}
    },
    [userToken.fulfilled]: (state, {payload}) => {
      return {...state, userToken:payload}
    }
  }
    
});

export const getUser = (state) => state.users.registeredUser
export const getUserSigninData = (state) => state.users.loggedUser
export const getUserToken = (state) => state.users.userToken
export const getErrors = (state) => state.users.showErrors
export const {showErrors} = usersSlice.actions
export default usersSlice.reducer
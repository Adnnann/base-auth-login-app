import { useEffect } from "react"
import { getUserToken, userToken,  getUserSigninData } from "../features/usersSlice"
import { useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router';
import Header from './Header'
import { Grid} from "@material-ui/core";
import Item from '@mui/material/Grid';

const Protected = ()=>{

    const dispatch = useDispatch()
    const user = useSelector(getUserSigninData)
    const token = useSelector(getUserToken)
    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(userToken())
        if(token === 'Request failed with status code 401'){
            navigate('/')
        } 
    },[dispatch, token.length])
    return(
    <>
     <Header />
     <Grid container alignItems="center">
        <Grid item xs={12} md={12} lg={12} xl={12}>
            <Item>
                {
                   Object.keys(user).length !== 0 ?
                <h1 style={{margin:"0 auto"}}>Welcome {user.user.name}</h1> : 'Loading...'
                }
            </Item>
        </Grid>
    </Grid>
   </>
)
    
}
export default Protected
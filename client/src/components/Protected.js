import { useEffect, useState } from "react"
import { getUserToken, userToken,  getUserSigninData, signoutUser } from "../features/usersSlice"
import { useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router';
import { Grid} from "@material-ui/core";
import Item from '@mui/material/Grid';
import { useIdleTimer } from "react-idle-timer";
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Button from '@material-ui/core/Button'
import jwtDecode from 'jwt-decode'
import Typography from "@material-ui/core/Typography"


const Protected = ()=>{

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = useSelector(getUserToken)
    const userSigninData = useSelector(getUserSigninData)
    const [userData, setUserData] = useState()
    const [inactiveUser, setInactiveUser] = useState(false)

    useEffect(()=>{
       dispatch(userToken())
        //getUserData()
        //In case user tried to visit url /protected without token, redirect 
        //to signin page
        if(token === 'Request failed with status code 401'){
            navigate('/')
        }
    },[])

    //set timeout 
    const timeout = 1200000

    //if user active reset timer
    const handleOnActive = () => {
        reset()
    }

    //if user inactive set inactiveUser to true and display modal windown
    const handleOnIdle = () => {
        setInactiveUser(true)
    }

    const {
      reset,
    } = useIdleTimer({
      timeout,
      onActive: handleOnActive,
      onIdle: handleOnIdle,
      crossTab: {
        emitOnAllTabs: true
      }
    })
  
    const redirectTosignin = () => {
        navigate('/signin')
        signoutUser()
        window.location.reload()
    }

    const getUserData = () =>{
        try{
            setUserData(jwtDecode(token.message).name)
        }catch(error){
            setUserData('Invalid token')
        }
    }
   

    return(
    <>
     <Grid container justifyContent="center">
        <Grid item xs={12} md={12} lg={4} xl={4}>
            <Item marginTop={5}>
                { Object.keys(userSigninData).length !== 0  ?
                    <Typography variant="h3" style={{marginTop:"50px"}}>
                        Welcome {userSigninData.user.name}
                    </Typography>
                : 'Loading...'
   
                }
        
            </Item>
        </Grid>
    </Grid>

    <Dialog open={inactiveUser}>
                <DialogTitle>Session expired</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You have been logged out due to inactivity.<br />
                        Please signin again
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                        <Button color="primary" autoFocus="autoFocus" onClick={redirectTosignin}>signin</Button>
                </DialogActions>
            </Dialog>
   </>
)
    
}
export default Protected
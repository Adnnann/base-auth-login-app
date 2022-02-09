import React from "react";
import AppBar  from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from '@material-ui/core/Button'
import { signoutUser } from "../features/usersSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";


const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const location = window.location.pathname

    const signout = () => {
        dispatch(signoutUser())
        navigate('/')
        window.location.reload()
    }
    return(
    <AppBar position="static">
        <Toolbar>
        {
            location === '/protected' ?
            <Button onClick={signout} style={{marginLeft:"auto"}}>Signout</Button>
            :null
        }
            
        </Toolbar>
    </AppBar>
    )


}
    

export default Header
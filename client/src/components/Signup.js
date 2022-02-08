import React, {useState} from "react"
import Card from '@material-ui/core/Card'
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from '@material-ui/core/Button'
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import Icon from "@material-ui/core/Icon"
import { makeStyles } from "@material-ui/core"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import { useSelector, useDispatch } from 'react-redux';
import { getUser, createUser } from "../features/usersSlice"
import { useNavigate } from "react-router"


const useStyles = makeStyles(theme=>({
    card:{
        maxWidth: 600,
        margin:'auto',
        textAlign: 'center',
        marginTop:theme.spacing(5),
        paddingBottom:theme.spacing(2)
    },
    error:{
        verticalAlign:'middle',
        fontSize:"18px"
    },
    tittle:{
        marginTop:theme.spacing(2),
        color: theme.palette.openTitle
    },
    textField:{
        marginLeft: theme.spacing(1),
        marginRight:theme.spacing(1),
        width:300
    },
    submit:{
        margin:'auto',
        marginBottom:theme.spacing(2)
    }

}))
const Signup = () =>{
    const classes = useStyles()
    const dispatch = useDispatch()
    const userData = useSelector(getUser)
    const navigate = useNavigate()
    const [values, setValues] = useState({
        name:'',
        password:'',
        email:'',
        repeatPassword: '',
        open:false,
        error:''
    })

    const handleChange = name => event =>{
        setValues({...values, [name]: event.target.value})
    }

    const clickSubmit = () => {
        const user = {
            name: values.name || undefined,
            email: values.email || undefined,
            password: values.password || undefined,
            repeatPassword: values.repeatPassword || undefined
            
        }
        dispatch(createUser(user))

        if(!values.repeatPassword || values.repeatPassword == ''){
            setValues({...values, error: 'Please repeat your password'})
        }else if(values.password !== values.repeatPassword){
            setValues({...values, error: 'Password do not match'})
        }else{
            setValues({...values, error: ''})
        }
       
        if(userData.hasOwnProperty('message')){
            setValues({...values, error: '', open:true})
        }
    }
    const redirectToLogin = () =>{
        navigate('/login')
    }
    return(
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant='h6' className={classes.tittle}>Sign Up</Typography>

                    <TextField id="name" label="Name" className={classes.textField}
                    value={values.name} onChange={handleChange('name')} margin="normal" />
                    <br />

                    <TextField id="email" type='email' label="Email" className={classes.textField}
                    value={values.email} onChange={handleChange('email')} margin="normal" />
                    <br />

                    <TextField id="password" type='password' label="Password" className={classes.textField}
                    value={values.password} onChange={handleChange('password')} margin="normal" />

                    <TextField id="repeatPassword" type='password' label="Repeat Password" className={classes.textField}
                    value={values.repeatPassword} onChange={handleChange('repeatPassword')} margin="normal" />
                    <br />
                    <br />

                    {
                    values.error ? (
                        <Typography component='p' color='error'>
                            <Icon color='error' className={classes.error}></Icon>
                            {values.error}
                        </Typography> 
                    ) 
                : Object.keys(userData).length !== 0 && (
                        <Typography component='p' color='error'>
                            <Icon color='error' className={classes.error}></Icon>
                            {userData.error}
                        </Typography> 
                    ) 
                }

                </CardContent>
                <CardActions>
                    <Button color='primary' variant="contained" onClick={clickSubmit}
                    className={classes.submit}>Submit</Button>
                </CardActions>
            </Card>
            <Dialog open={userData.hasOwnProperty('message') ? true : false}>
                <DialogTitle>New Account</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        New account successfuly created.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                        <Button color="primary" autoFocus="autoFocus" onClick={redirectToLogin}>Sign In</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Signup
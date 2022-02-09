import CardActions from "@material-ui/core/CardActions"
import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { useNavigate } from "react-router"
import Card from '@material-ui/core/Card'
import { useEffect } from "react"

    const useStyles = makeStyles({
        submit:{
            margin:'auto',
            marginBottom:"20px",
            width:"200px"
        },
        card:{
            maxWidth: 600,
            margin:'auto',
            textAlign: 'center',
            marginTop:"10%",
            paddingBottom:"2%"
        }
    
    })
    const MainPage = () => {

    const classes = useStyles()
    const navigate = useNavigate()
    
    const signin = () =>{
        navigate('/signin')
    }
    
    const signup = () =>{
        navigate('/signup')
    }
    
    return(

    <Card className={classes.card}>
        <CardActions>
            <Button color='primary' variant="contained" onClick={signin}
            className={classes.submit}>signin</Button>
            <Button color='primary' variant="contained" onClick={signup}
            className={classes.submit}>Signup</Button>
        </CardActions>
    </Card>

    )
}

export default MainPage
import { useEffect } from "react"
import { getUserPage, userPage } from "../features/usersSlice"
import { useDispatch, useSelector, useStore } from "react-redux"
import jwtDecode from 'jwt-decode'

const Protected = ()=>{

    const dispatch = useDispatch()
    const user = useSelector(getUserPage)

    useEffect(()=>{
        dispatch(userPage())
        console.log(user)
    },[dispatch])

    return(
        <>
        <h2>Welcome</h2>
        <button onClick={()=>console.log(jwtDecode(user.message))}>fefnefnj</button>
        </>
    )
}
export default Protected
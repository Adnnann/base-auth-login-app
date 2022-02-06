import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import jwtDecode from 'jwt-decode'
import User from '../models/user.model'
import config from '../config/config'

const signin = (req, res) => {
    
    User.findOne({'email': req.body.data.email},(err, user) => {
        if(err || !user){
            return res.status(401).json('User not found')
        }
        if(!user.authenticate(req.body.data.password)){
            return res.status(400).json({error: 'Email and password do not match'})
        }
        const token = jwt.sign({_id: user._id, email:user.email, name:user.name}, config.secret)
        res.cookie('userJwtToken', token, {expire: new Date()+999, httpOnly:true})
        res.status(200).json({
            token,
            user: {_id:user._id, name: user.name, email: user.email}
        })
    })
}

const signout = (req, res) => {
    res.clearCookie('userJwtToken')
    res.status(200).json({message:'User signed out'})
}

const requireSignin = expressJwt({
    secret:config.secret,
    algorithms:['HS256'],
    userProperty: 'auth',
})

const hasAuthorization = (req, res, next) => {
    const authorized = req.profile && req.auth && req.profile._id == req.auth._id
    if(!authorized) return res.status(403).json('User is not authorized!')
    next()
}

export default {signin, signout, hasAuthorization, requireSignin}



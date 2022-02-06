import passport from 'passport'
import passportJwt from 'passport-jwt'
import User from '../models/user.model'
import config from '../config/config'
import jwtDecode from 'jwt-decode'


const cookieExtractor = req => {
    let jwt;

    if (req && req.cookies) {
        jwt = req.cookies
    }

    return jwt.userJwtToken
}
const JWTStrategy = passportJwt.Strategy

passport.use(new JWTStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey: config.secret
}, (jwtPayload, done) => {
    //console.log(jwtPayload.sub)
    if(jwtPayload){
        return done(null, jwtPayload)
    }else{
        return done('Errorfvbfb', null)
    }
}))
//     return User.findById(jwtPayload.sub)
//     .then(user => {
//         return done(null, user)
//     })
//     .catch(err=>{
//         return done(err)
//     })
// }









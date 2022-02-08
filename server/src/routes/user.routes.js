import express from 'express'
import userCtrl from '../controllers/user.controller'
import authCtrl from '../controllers/auth.controller'
import passport from 'passport'
require('../middleware/passport')

const router = express.Router()

router.route('/user/register').post(userCtrl.create)

router.route('/user/:userId')
.get(authCtrl.requireSignin, userCtrl.read)

router.get('/protected', passport.authenticate('jwt', { session: false }),
    (req, res) => {
        if(req.cookies.userJwtToken){
            res.send(
               JSON.stringify({message: req.cookies.userJwtToken})
            )
        }
    }
)

export default router
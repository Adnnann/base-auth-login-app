import User from '../models/user.model'
import _ from 'lodash'
import errorHandler from './helpers/dbErrorHandlers'


  const create = async (req, res, next) => {

    const response =  await req.body
   

            try{
                const user = new User(response.data)
                user.save((err, result) => {
                    if(err) {
                    return res.status(400).json({error: errorHandler.getErrorMessage(err)})
                    }else{
                        return res.status(200).json({message: 'Successfuly created a new user.'})
                    }
                })
            }catch(err){
                console.log(err)
            }
            
            
       
      

}

const userByID = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if(err || !user){
            return res.status(404).json({error:'User not found!'})
        }
    req.profile = user;
    next()
    })
}


const read = (req, res) => {
    req.profile.hashed_password = undefined
    req.profile.salt = undefined
    console.log(req.profile)
    res.status(200).json(req.profile)
}

export default {
    create,
    userByID,
    read
}
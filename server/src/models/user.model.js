import mongoose from 'mongoose'
import crypto from 'crypto'
import mongooseUniqueValidator from 'mongoose-unique-validator'
import validate from 'mongoose-validator'

const nameValidator = [
    validate({
        validator:'isAlphanumeric',
        message:'Name should contain alpha-numeric characters only',
    })
]

const emailValidator = [
    validate({
        validator: 'isEmail',
        message: 'Please enter valid email address '
    })
]

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:'Username is required',
        trim: true,
        validate: nameValidator
    },
    email:{
        type:String,
        unique:true,
        required:'Email is required',
        validate: emailValidator
    },
    hashed_password:{
        type:String,
        required: 'Password is required',
        minLength:6
    },
    salt:String
})

UserSchema.plugin(mongooseUniqueValidator)

UserSchema.virtual('password')
.set(function(password){
    this._password = password,
    this.salt = this.makeSalt(),
    this.hashed_password = this.encryptPassword(password)
})

UserSchema.methods = {
    authenticate: function(plainText){
        return this.encryptPassword(plainText) === this.hashed_password
    },
    encryptPassword: function(password){
        if(!password) return ''
        try{
            return crypto
            .createHmac('sha1', this.salt)
            .update(password)
            .digest('hex')
        }catch(err){
            return err
        }
    },
    makeSalt: function(){
        return Math.round((new Date().valueOf() * Math.random())) + ''
    }
}

UserSchema.path('hashed_password').validate(function(v){
    if(this._password && this._password.length < 6){
        this.invalidate('password', 'Password must be at least 6 characters')
    }
}, null)

export default mongoose.model('User', UserSchema)

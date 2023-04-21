const mongoose=require("mongoose")
const jwt = require("jsonwebtoken")

const examModel=require("../../database/models/examModel")
const adminSchema=mongoose.Schema({
fname:{
    type:String,
    trim:true,
    required:true,
    minlenght:2,
    maxlenght:10,
    lowercase:true,
    },

    lname:{
    type:String,
    trim:true,
    lowercase:true,
    required:true,
    minlenght:2,
    maxlenght:10,
    },
    email:{
        type:String,
        unique:true,
        required:true,
        match:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    },

    password:{
        type:String,
        required:true,
        minlenght:5,
        match:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    },
isAdmin: {
    type: Boolean,
    default: true
  }, 

    gender:{
        type:String,
        trim:true,
        lowercase:true,
        enum:["male", "female"]
    }, 

    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ] 

},{timestamps:true})


adminSchema.statics.loginMe = async (email, password) => {
    const userData = await adminModel.findOne( { email } )
    const userpass = await adminModel.findOne( { password } )
    if(!userData) throw new Error ("invalid email")
    
    if(!userpass) throw new Error ("invalid password")
    return userData ,userpass
}
adminSchema.methods.generateToken = async function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT)
   this.tokens.push({token})
    
    await this.save()
    return token
}

const adminModel=mongoose.model("Admin", adminSchema)
module.exports=adminModel
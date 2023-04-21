const mongoose=require("mongoose")

const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken")
const userSchema=mongoose.Schema({
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
        unique:true,
        required:true,
        minlenght:5,
        match:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    },


    gender:{
        type:String,
        trim:true,
        lowercase:true,
        enum:["male", "female"]
    }, 
    scour:{
       type:Number,
       default:0 
    },
    allowed:{type:Boolean,
    default:true},
    isAdmin: {
    type: Boolean,
    default: false
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

userSchema.pre("save", async function(){
    if(this.isModified("password"))
        this.password = await bcrypt.hash(this.password, 12)
})


userSchema.methods.isValid = function(hashedpassword){
    return  bcrypt.compareSync(hashedpassword, this.password);
}


userSchema.statics.loginMe = async (email, password) => {
    const userData = await studentModel.findOne( { email } )
    if(!userData) throw new Error ("invalid email")
    const matched = await bcrypt.compare(password, userData.password)
    if(!matched) throw new Error ("invalid password")
    return userData
}


userSchema.methods.generateToken = async function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT)
   this.tokens.push({token})
    //this.tokens = this.tokens.concat({token})
    await this.save()
    return token
}





const studentModel=mongoose.model("Student", userSchema)

module.exports= studentModel
 

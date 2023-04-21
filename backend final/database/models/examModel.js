//exam=> sub, qu, options, answer, 
const mongoose=require("mongoose")
const validator=require("validator")
const examSchema=mongoose.Schema({
    //  adminId:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     required:true,
    //     ref:"Admin"
    // },
subject:{
    type:String,
   required:true,
   trim:true
},
questions:
[{
    
    que:{
        type:String,
        required:true
    },

    answre:{type:String,
        required:true},

    Options: {
    type: [String],
    validate: {
      validator: function(v) {
        return v.length === 3;
      },message: props => `${props.value} must have exactly 3 options.`},required: true,}

}]
,
},{timestamps:true}
)

const examModel = mongoose.model("Exam", examSchema)
module.exports=examModel
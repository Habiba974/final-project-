
const { query } = require("express")
const studentModel=require("../../database/models/studentModel")
const examModel=require("../../database/models/examModel")
const Helper=require("../Helper")
class Student{
    //student regester 
static register=async(req,res)=>{
    try{const newStudent=new studentModel(req.body)
    await newStudent.save()
Helper.resHandler(res,200,true,newStudent,"student add")
}
catch(e){ Helper.resHandler(res,500,false,e.message,"error")}
    
}

//login
 static login = async(req, res)=>{
        try{
           const userData = await studentModel.loginMe(req.body.email, req.body.password)
           const token = await userData.generateToken()
           Helper.resHandler(res,200, true, {userData,token}, "log in scuss")
        }
        catch(e){
            Helper.resHandler(res, 500, false, e, e.message)
        }
    }
///logout
 static logout = async(req,res)=>{
        try{
            req.user.tokens = req.user.tokens.filter(t => t.token != req.token )
            await req.user.save()
            Helper.resHandler(res, 200, true, {}, "logged out sucss")
        }
        catch(e){
            Helper.resHandler(res, 500, false, e.message, "Error featch data")
        }
    }

    //show my account
     static showMyAccount = async(req,res)=>{
        try{
            const student = await studentModel.findById(req.params.id)
            Helper.resHandler(res, 200, true, student, "show my account")
        }
        catch(e){
            Helper.resHandler(res, 500, false, e.message, "Error featch data")
        }
    }
//edit my acount
     static editAccount = async(req,res)=>{
        try{
            const student = await studentModel.findById(req.params.id)
            for(let index in req.body){
                student[index]= req.body[index]
            }
            await student.save()
            Helper.resHandler(res, 200, true, student, "users featched")
        }
        catch(e){
            Helper.resHandler(res, 500, false, e.message, "Error featch data")
        }
    }
static showSingleExam = async (req, res) => {
  try {
    const exam = await examModel.findById((req.params.id), { "questions.answre": 0 }); 
    Helper.resHandler(res, 200, true, exam, "show succ");
  } catch (e) {
    Helper.resHandler(res, 500, false, e.message, "Error fetching data");
  }
}

static showAllExam = async (req, res) => {
  try {
    const allExams = await examModel.find({}, { "questions.answre": 0 }); 
    Helper.resHandler(res, 200, true, allExams, "allExams");
  } catch (e) {
    Helper.resHandler(res, 500, false, e.message, "Error fetching data");
  }
}

static delmyAccount = async(req,res)=>{
        try{
           await studentModel.findByIdAndDelete(req.params.id)
            
            Helper.resHandler(res, 200, true, {}, "delet succ")
        }
        catch(e){
            Helper.resHandler(res, 500, false, e.message, "Error featch data")
        }
    }
}
module.exports=Student
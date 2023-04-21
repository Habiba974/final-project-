const adminModel=require("../../database/models/adminModel")
const studentModel=require("../../database/models/studentModel")
const examModel=require("../../database/models/examModel")

const Helper=require('../Helper')

class Admin{
static singInAdmin=async(req,res)=>{
    try{const admin=new adminModel(req.body)
    await admin.save()
Helper.resHandler(res,200,true,admin,"admin add")
}
catch(e){ Helper.resHandler(res,500,false,e.message,"error")}
}

//show all users
static showAllStudent = async(req,res)=>{
        try{
            const allStudent = await studentModel.find()
            Helper.resHandler(res, 200, true, allStudent , "students")
        }
        catch(e){
            Helper.resHandler(res, 500, false, e.message, "Error featch data")
        }
    }
//show single student
 static singleStudent = async(req,res)=>{
        try{
            const student = await studentModel.findById(req.params.id)
            Helper.resHandler(res, 200, true, student , "student")
        }
        catch(e){
            Helper.resHandler(res, 500, false, e.message, "Error featch data")
        }
    }
//delete single student
static delStudent = async(req,res)=>{
        try{
           await studentModel.findByIdAndDelete(req.params.id)
            
            Helper.resHandler(res, 200, true, {}, "delet succ")
        }
        catch(e){
            Helper.resHandler(res, 500, false, e.message, "Error featch data")
        }
    }
//delet all exams
 static delAllExams = async(req,res)=>{
        try{
            await examModel.deleteMany()
            Helper.resHandler(res, 200, true, {}, "all exams deleted")
        }
        catch(e){
            Helper.resHandler(res, 500, false, e.message, "Error featch data")
        }}
//show all exam
       static showAllExam = async(req,res)=>{
        try{
            const allExams = await examModel.find()
            Helper.resHandler(res, 200, true, allExams , "allExams")
        }
        catch(e){
            Helper.resHandler(res, 500, false, e.message, "Error featch data")
        }
    }
    
    
static editExam = async (req, res) => {
  try {
    const data = await examModel.findById(req.params.id);


    if (req.body.subject) {
      data.subject = req.body.subject;
    }
    if (req.body.questions) {
      data.questions = req.body.questions;
    }

    await data.save();
    Helper.resHandler(res, 200, true, data, "Exam updated successfully");
  } catch (error) {
    Helper.resHandler(res, 500, false, error.message, "Error updating exam");
  }
}
    
static login = async(req, res)=>{
        try{
           const userData = await adminModel.loginMe(req.body.email, req.body.password)
           const token = await userData.generateToken()
           Helper.resHandler(res,200, true, {userData,token}, "log in scuss")
        }
        catch(e){
            Helper.resHandler(res, 500, false, e, e.message)
        }
    }

    static delsingleExam = async(req,res)=>{
        try{
           await examModel.findByIdAndDelete(req.params.id)
            
            Helper.resHandler(res, 200, true, {}, "delet succ")
        }
        catch(e){
            Helper.resHandler(res, 500, false, e.message, "Error featch data")
        }
    }
}
module.exports=Admin
const examModel=require("../../database/models/examModel")
const {resHandler}=require("../Helper")
class Exam{
    //add exam
    static addExam = async(req,res)=>{
        try{
            const exam = new examModel(req.body)
            await exam.save()
            resHandler(res, 200, true, exam, "added")
        }
        catch(e){
            resHandler(res,500,false, e, e.message)
        }
    }

static exam= async(req,res)=>{
        try{
            // const allTasks = await taskModel.find({userId: req.user._id})
            await req.user.populate("exam")
            resHandler(res,200, true, req.user.exam, "fetched")
        }
        catch(e){
            resHandler(res,500,false, e, e.message)
        }

    }
static answer=async(req,res)=>{
    try{
        const exam = await examModel.findById(req.params.id);
       

    const answers = exam.questions.map((question) => {
      return question.answre;
      });
    

    resHandler(res,200, true,answers , "allAnswres")
    }
    catch(e){ resHandler(res,500,false, [], e.message)}
}

}
module.exports=Exam
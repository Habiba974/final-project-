const router =require("express").Router()
const examController=require('../app/controller/examController')
 const adminAuth=require("../app/middel/adminAuth")
router.post("/addExam",examController.addExam)
router.get("/answre/:id",examController.answer)
module.exports=router
const router =require("express").Router()
const adminAuth=require("../app/middel/adminAuth")
const adminController=require('../app/controller/adminController')


router.get("/showAll",adminController.showAllStudent)
router.post("/singin",adminController.singInAdmin)
router.get("/single/:id",adminAuth,adminController.singleStudent)
router.delete("/deleteSingle/:id",adminAuth,adminController.delStudent)
router.get("/showAllExams",adminController.showAllExam)
router.patch("/editExam/:id",adminAuth,adminController.editExam)

router.get("/login",adminController.login)
router.delete("/delSingleExam/:id",adminController.delsingleExam)
router.delete("/delAllExams",adminController.delAllExams)
module.exports=router
const router =require("express").Router()
const studentController=require('../app/controller/studentController')
const auth =require("../app/middel/auth")

router.post("/register",studentController.register)
router.post("/login",studentController.login)
router.get("/logout",auth,studentController.logout)
router.get("/showAccount/:id",auth,studentController.showMyAccount)
router.patch("/editAccount/:id",auth,studentController.editAccount)

router.get("/showExams",studentController.showAllExam)
//router.post("/submitAnswer/:id",auth,studentController.submitAnswer)
router.delete("/delMyAccount",auth,studentController.delmyAccount)
router.get("/singleExam/:id",studentController.showSingleExam)
module.exports=router
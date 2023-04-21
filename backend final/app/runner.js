const express=require("express")
const cors = require("cors")
const app=express()

require("../database/connections")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const studentRoutes=require('../routes/student.routes')
app.use("/api/student",studentRoutes)

const adminRoutes=require('../routes/admin.routes')
app.use("/api/admin",adminRoutes)

const examRoutes=require('../routes/exam.routes')
app.use("/api/exam",examRoutes)



app.all("*",(req,res)=> res.status(404).send({apiStatus:"false",data:null,message :"invalid url"})
)
module.exports=app
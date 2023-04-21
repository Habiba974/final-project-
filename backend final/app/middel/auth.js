const studentModel = require("../../database/models/studentModel")
const { resHandler } = require("../Helper")
const {verify} = require("jsonwebtoken")
const auth = async(req, res, next)=>{
    try{
        
        const token = req.header("Authorization").replace("bearer ", "")
        const deToken = verify(token, process.env.JWT)
        const stData = await studentModel.findOne({
            _id: deToken._id,
            "tokens.token":token
        })
        if(!stData) throw new Error("unauth")
        req.user = stData
        req.token = token
        next()
    }
    catch(e){
        resHandler(res, 500, false, e.message, "undefind user")
    }
}
module.exports = auth
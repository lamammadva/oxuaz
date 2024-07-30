const {userServices} = require("../services")

const createuser = async(req,res,next)=>{
    try {
        const data = await userServices.createuser(req.body)
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}
const userAll = async(req,res,next)=>{
    try {
        const data = await userServices.userAll()
        res.status(200).json(data)
    } catch (error) {
        next(error)
        
    }


}
const findById = async(req,res)=>{
    const data = await userServices.findById(req.params.id)
}

module.exports = {
    createuser,userAll,findById
}
const {userServices} = require("../services")

const createuser = async(req,res)=>{
    try {
        const data = await userServices.createuser(req.body)
        res.status(200).json(data)
        
        
    } catch (error) {
        res.status(500).json({message:error?.message})
    }
}
const userAll = async(req,res)=>{
    try {
        const data = await userServices.userAll()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:error?.message})
        
    }


}

module.exports = {
    createuser,userAll
}
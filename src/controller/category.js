const {categoryServices} = require("../services/index")


exports.getAllCategory = async(req,res)=>{
    try {
        const data = await categoryServices.getAllCategory()
        res.status(200).json(data)
    } catch (error) {
        req.status(500).json({error:"server error"})
        
    }

}
exports.getCategoryById = async(req,res)=>{
    const {id} = req.params
    try {
        const data = await categoryServices.getCategoryById(id)
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({error:"not found category with id"})
        
    }

}
exports.createCategory = async(req,res)=>{
    try {
        const data = await categoryServices.createCategory(req.body)
        res.status(200).json(data)
      
    } catch (error) {
        res.status(500).json({error:"server error"})

        
    }

}
exports.updateCategory = async(req,res)=>{
    const {id} = req.params
    try {
        const data = await categoryServices.updateCategory(id,req.body)
        res.status(200).json(data)
    } catch (error) {
        res.status(409).json({
            error:"not found category with id"
        })
        
    }

}
exports.deleteCategory = async(req,res)=>{
    const {id} = req.params
    try {
        await categoryServices.deleteCategory(id)
        res.status(200).json("successfully")
    } catch (error) {
        res.status(404).json({
            message:error?.message
        })
        
    }

}
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
        if(!data){
        res.status(404).json("category not found ")
        }
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({error:"server error"})
        
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
        res.status(505).json({
            error:"server error"
        })
        
    }

}
exports.deleteCategory = async(req,res)=>{
    const {id} = req.params
    try {
        const datas = await categoryServices.getCategoryById(id)
        if(!datas){
            res.json({
                status:true,
                message:"there is no category with this id"
            })
        }
        const data = await categoryServices.deleteCategory(id)
        res.status(200).json("successfully")
    } catch (error) {
        
    }

}
const Category = require("../models/category")

exports.getAllCategory = async(req,res)=>{
    try {
        const data = await Category.find()
        res.status(200).json(data)
    } catch (error) {
        req.status(500).json({error:"server error"})
        
    }

}
exports.getCategoryById = async(req,res)=>{
    const {id} = req.params
    try {
        const data = await Category.findById(id)
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
        const data = new Category(req.body)
        const newsdata = await data.save()
        console.log(newsdata);
        res.status(200).json(newsdata)
      
    } catch (error) {
        res.status(500).json({error:"server error"})

        
    }

}
exports.updateCategory = async(req,res)=>{
    const {id} = req.params
    try {
        const data = await Category.findByIdAndUpdate(id,req.body)
        res.status(200).json(data)
    } catch (error) {
        
    }

}
exports.deleteCategory = async(req,res)=>{
    const {id} = req.params
    try {
        const data = await Category.findByIdAndDelete(id)
        if(!data){
            return res.status(404).json("category not found")
        }
       
        res.status(200).json("successfully")
    } catch (error) {
        
    }

}
const Category = require("../models/category")

const createCategory = async(newdata)=>{
    console.log(newdata);
    const data = await Category.create(newdata)
    return data
}
const getAllCategory = async()=>{
    const data = await Category.find()
    return data

}
const getCategoryById = async(id)=>{
    const data = await Category.findById(id)
    return data
}
const deleteCategory = async(id)=>{
    const data = Category.deleteOne({_id:id})
    return data
}
const updateCategory = async(id,updatedata)=>{
    
    const data = await Category.findByIdAndUpdate(id,updatedata)
    return data
}


module.exports = {
    createCategory,
    getAllCategory,
    getCategoryById,
    deleteCategory,
    updateCategory

}
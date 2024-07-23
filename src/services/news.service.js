const News = require("../models/news")

const createNews = async (newdata)=>{
    const {title,description,category,userId} = newdata
    const newsitems = await News.create({
        title,
        description,
        category,
        userId
        
    })
    return newsitems

}
const getNews = async (userId)=>{
    
    const data = await News.find({userId:userId})
    return data
}
const deletedNews = async (id) =>{
    const data = await News.findByIdAndDelete(id)
    console.log(data);
    return data
    
}
const getNewsById = async (id)=>{
    const data = await News.findById(id)
    if(!data) throw new Error("not found news with id")
    return data
}
const updateNews = async (id,updatedata)=>{
    const data = await News.findByIdAndUpdate(id,updatedata)
    return data

}
module.exports = {
    createNews,
    getNews,
    getNewsById,
    deletedNews,
    updateNews
}
const News = require("../models/news")

const createNews = async (newdata)=>{
    const {title,description,category} = newdata
    const newsitems = await News.create({
        title,
        description,
        category
    })
    return newsitems

}
const getNews = async ()=>{
    const data = await News.find()
    return data
}
const deletedNews = async (id) =>{
    const data = await News.findByIdAndDelete(id)
    console.log(data);
    return data
    
}
const getNewsById = async (id)=>{
    const data = await News.findById(id)
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
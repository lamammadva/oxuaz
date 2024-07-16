const News = require("../models/news")
exports.getAllNews = async(req,res)=>{
    try {
        const data = await News.find
        res.status(200).json(data)
    } catch (error) {
        
    }

}
exports.getNewsById = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }

}
exports.createNews = async(req,res)=>{
    try {
        const data = new News(req,body)
        const newsdata = await data.save()
        res.status(200).json(newsdata)
    } catch (error) {
        
    }

}
exports.updateNews = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }

}
exports.deleteNews = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }

}
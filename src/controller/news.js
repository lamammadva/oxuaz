const News = require("../models/news")
const { newsServices } = require("../services")


exports.getAllNews = async(req,res,next)=>{
    const {user} = req
    console.log(user);
    try {
        const data = await newsServices.getNews(user._id)
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }

}
exports.getNewsById = async(req,res,next)=>{
    try {
        const {id} = req.params
        const data = await newsServices.getNewsById(id)
        res.json({
            status:true,
            message:"news exist",
            data
        })
    } catch (error) {
       next(error)

       }
    }
  


exports.createNews = async(req,res,next)=>{
    const {user} = req
    const params = {...req.body, userId:user._id}
    console.log(params);
    try {
        const data = await newsServices.createNews(params)
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }

}
exports.updateNews = async(req,res,next)=>{
    const {id} = req.params
    const {user} = req
    const params = {...req.body, userId:user._id}
    try {
        const data = await newsServices.updateNews(id,req.body)
        console.log(data);
        res.json({
            status:true,
            message:"News updated",
            data
        })
    } catch (error) {
        next(error)
        
    }

}
exports.deleteNews = async(req,res,next)=>{
    try {
        const {id} = req.params
        await newsServices.deletedNews(id)
        res.json({
            status:true,
            message:"deleted news",
            
        })
    } catch (error) {
        next(error)
    }

}
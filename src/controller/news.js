const News = require("../models/news")
const { newsServices } = require("../services")


exports.getAllNews = async(req,res)=>{
    try {
        const data = await newsServices.getNews()
        res.status(200).json(data)
    } catch (error) {
        
    }

}
exports.getNewsById = async(req,res)=>{
    try {
        const {id} = req.params
        const data = await newsServices.getNewsById(id)
        if(!data){
            return res.status(404).json({
                status:false,
                message:"news not found"
            })
        }
        res.json({
            status:true,
            message:"news exist",
            data
        })

        
    } catch (error) {
        res.status(500).json({
            status:false,
            message:"server error"
        })
        
    }
  

}
exports.createNews = async(req,res)=>{
    try {
        const data = await newsServices.createNews(req.body)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({error:"server error"})
        
    }

}
exports.updateNews = async(req,res)=>{
    const {id} = req.params
    try {
        const data = await newsServices.updateNews(id,req.body)
        console.log(data);
        res.json({
            status:true,
            message:"News updated",
            data
        })
    } catch (error) {
        res.status(505).json({
            status:false,
            message:"server error",
            
        })
        
    }

}
exports.deleteNews = async(req,res)=>{
    try {
        const {id} = req.params
        await newsServices.deletedNews(id)
        res.json({
            status:true,
            message:"deleted news",
            
        })
    } catch (error) {
        res.status(505).json({
            status:false,
            message:"serve error"
        })
        
    }

}
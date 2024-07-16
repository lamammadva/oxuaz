const mongoose = require("mongoose")

const newsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    } ,
    description:{
        type:String,
        required:true
    },
    like:{
        type:Number,
        default:0
    },
    dislike:{
        type:Number,
        default:0
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,ref:"Category"
    }

})
module.exports = mongoose.model("News",newsSchema)
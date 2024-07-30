const AppError = require("../errors/app.error")
const User = require("../models/user.model")
const { hashPassword } = require("../utils/bcrypt")


const createuser = async(params)=>{
    const {username,password} = params
    const userdata = await findByUsername(username)
    hash = await hashPassword(password)

    if(userdata){
        throw new AppError("User already exists!!",409)
    }
    const data = await User.create({
        username,
        password:hash
    })
    return data  
}
const findByUsername = async (username)=>{
    const data = await User.findOne({username:username})
    return data
}
const findById = async (id)=>{
    const data = await User.findById(id)
    return data
}
const userAll = async ()=>{
    const data = await User.find()
    return data


}

module.exports = {
    createuser,findByUsername,userAll,findById
}
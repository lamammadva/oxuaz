const User = require("../models/user.model")


const createuser = async(params)=>{
    const {username,password} = params
    const userdata = await findByUsername(username)
    if(userdata){
        throw new Error("user already exists")

    }
    const data = await User.create({
        username,
        password

    })
    return data  
}


const findByUsername = async (username)=>{
    const data = await User.findOne({username:username})
    return data
}

const userAll = async ()=>{
    const data = await User.find()
    return data


}

module.exports = {
    createuser,findByUsername,userAll
}
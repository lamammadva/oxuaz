const User = require("../models/user.model")
const { encodePayload } = require("../utils/jwt.util")
const { findByUsername } = require("./user.service")


const login = async(params)=>{
    const {username,password} = params || {}
    const  user = await findByUsername(username)
    if(!user){
        throw new Error("username_not_found")
    }
    if(password !== user.password){ 
        throw new Error("password_incorrect")
    }
    const payload = {
        userId :user.id,
    }
    const token = encodePayload(payload)
    const userWithoutPassword = {
        ...user.toObject(),  
        password: undefined,
      };
    return {
        user:userWithoutPassword,
        token
    }


    

}


module.exports = {
    login
}
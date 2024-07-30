const { NotFoundError, ValidationErrors } = require("../errors")
const {  checkPassword } = require("../utils/bcrypt")
const { encodePayload } = require("../utils/jwt.util")
const { findByUsername } = require("./user.service")


const login = async(params)=>{
    const {username,password} = params || {}
    const  user = await findByUsername(username)
    if(!user){
        throw new NotFoundError("Username not found!!")
    }
    let check = await checkPassword(password,user.password)
    if(!check){ 
        throw new ValidationErrors("Password incorrect!!")
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
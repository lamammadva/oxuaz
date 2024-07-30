const bcrypt = require('bcrypt')

const hashPassword = async(password)=>{
    return hash = bcrypt.hash(password,10)

}
const checkPassword = async(password,hashedPassword)=>{
    console.log(password);
    
    return check = bcrypt.compare(password,hashedPassword)

}

module.exports = {
    hashPassword,
    checkPassword
}
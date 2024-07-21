const {loginService} = require('../services')


const login = async(req,res)=>{
    try {
        const data = await loginService.login(req.body)
        res.status(200).json(data)
    } catch (error) {
        switch (error?.message) {
           case "username_not_found":
               res.status(404).json({ message: "Username not found" })
               break;
           case  "password_incorrect":
               res.status(400).json({ message: "Password is not correct" })
               break
           default:
               res.status(500).json({ message: error.message })
               break;
        }
       
       
      }

}

module.exports = {
    login
}
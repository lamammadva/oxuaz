    const {loginService} = require('../services')


    const login = async(req,res,next)=>{
        try {
            const data = await loginService.login(req.body)
            res.status(200).json(data)
        } catch (error) {
            next(error)
        
        }

    }

    module.exports = {
        login
    }
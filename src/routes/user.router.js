const express = require('express')
const router = express.Router()
const {userController} = require("../controller")


router.post('/',userController.createuser)
router.get('/',userController.userAll)



module.exports = router
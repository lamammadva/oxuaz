const express = require('express')
const router = express.Router()
const loginController = require("../controller/login.controller")
const {validationMiddleware} = require("../middleware/validation.middleware")
const { authSchema } = require('../schema')

router.post("/", validationMiddleware(authSchema), loginController.login)

module.exports = router
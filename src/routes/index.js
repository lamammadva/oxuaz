const express = require("express")
const router = express.Router()
const newsRouter = require("./news")
const categoryRouter = require("./category")
const userRouter = require("./user.router")
const loginRouter = require("./login.router")


router.use("/news",newsRouter)
router.use("/category",categoryRouter)
router.use("/register", userRouter)
router.use("/login", loginRouter)

module.exports = router
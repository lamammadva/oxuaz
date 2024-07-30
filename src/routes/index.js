const express = require("express")
const router = express.Router()
const newsRouter = require("./news.router")
const categoryRouter = require("./category")
const userRouter = require("./user.router")
const loginRouter = require("./login.router")
const { authMiddleware } = require("../middleware/auth.middleware")



router.use("/news", authMiddleware, newsRouter)
router.use("/category",categoryRouter)
router.use("/users", userRouter)
router.use("/login" , loginRouter)

module.exports = router
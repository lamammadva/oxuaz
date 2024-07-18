const express = require("express")
const router = express.Router()
const newsRouter = require("./news")
const categoryRouter = require("./category")


router.use("/news",newsRouter)
router.use("/category",categoryRouter)


module.exports = router
const express = require("express")
const router = express.Router()
const newsController = require("../controller/news")
router.get("/",newsController.getAllNews)
router.post("/",newsController.createNews)
router.post("/:id",newsController.updateNews)
router.get("/:id",newsController.getNewsById)
router.delete("/:id",newsController.deleteNews)

module.exports = router
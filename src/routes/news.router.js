const express = require("express")
const router = express.Router()
const allController = require("../controller/index")
const {authMiddleware} = require("../middleware/auth.middleware")

router.get("/",authMiddleware,allController.newsController.getAllNews)
router.post("/",authMiddleware,allController.newsController.createNews)
router.put("/:id",allController.newsController.updateNews)
router.get("/:id",allController.newsController.getNewsById)
router.delete("/:id",allController.newsController.deleteNews)

module.exports = router
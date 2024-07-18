const express = require("express")
const router = express.Router()
const allController = require("../controller/index")


router.get("/",allController.categoryController.getAllCategory)
router.post("/",allController.categoryController.createCategory)
router.put("/:id",allController.categoryController.updateCategory)
router.get("/:id",allController.categoryController.getCategoryById)
router.delete("/:id",allController.categoryController.deleteCategory)

module.exports = router
const express = require("express")
const router = express.Router()

const categoryController = require("../controller/category")
router.get("/",categoryController.getAllCategory)
router.post("/",categoryController.createCategory)
router.put("/:id",categoryController.updateCategory)
router.get("/:id",categoryController.getCategoryById)
router.delete("/:id",categoryController.deleteCategory)

module.exports = router
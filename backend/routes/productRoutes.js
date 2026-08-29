const { create, allProducts, product, update, del } = require("../controllers/productController")
const protected = require("../middlewares/authMiddleware")
const authorizeAdmin = require("../middlewares/adminMiddleware")
const express = require("express")
const router = express.Router()


router.post("/create", protected, authorizeAdmin, create)
router.get("/all-products", allProducts)
router.get("/:id", product)
router.delete("/:id", protected, authorizeAdmin, del)
router.put("/:id", protected, authorizeAdmin, update)

module.exports = router

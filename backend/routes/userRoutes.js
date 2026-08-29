const {profile , allProfiles}  = require("../controllers/userController")
const protected = require("../middlewares/authMiddleware")
const authorizeAdmin = require("../middlewares/adminMiddleware")
const express = require("express")
const router = express.Router()


router.get("/all-users", protected , authorizeAdmin , allProfiles)
router.get("/:id", protected , profile)

module.exports = router

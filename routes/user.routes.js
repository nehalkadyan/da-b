const express = require("express");
const {getUserById} = require("../controllers/user.controller")
const router = express.Router();

router.get("/get-user", getUserById)

module.exports = router
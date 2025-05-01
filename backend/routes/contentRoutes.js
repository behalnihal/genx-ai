const express = require("express");
const router = express.Router();
const contentController = require("../contollers/contentController");
const auth = require("../middleware/auth");

router.post("/generate", auth, contentController.generateContent);
router.get("/my-content", auth, contentController.getUserContent);

module.exports = router;

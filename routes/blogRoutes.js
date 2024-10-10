const express = require("express");
const { getBlogs, createBlog } = require("../controllers/blogController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", getBlogs);
router.post("/", protect, createBlog);

module.exports = router;

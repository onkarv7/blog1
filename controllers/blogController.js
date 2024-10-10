const Blog = require("../models/Blog");

// Get all blogs
const getBlogs = async (req, res) => {
  const blogs = await Blog.find().populate("author", "username");
  res.json(blogs);
};

// Create a new blog
const createBlog = async (req, res) => {
  const { title, content, location } = req.body;
  const blog = new Blog({
    title,
    content,
    author: req.user._id,
    location,
  });
  await blog.save();
  res.status(201).json(blog);
};

module.exports = { getBlogs, createBlog };

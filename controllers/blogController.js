const asyncHandler = require('express-async-handler');
const Blog = require('../models/Blog');

// @desc    Create a new blog post
// @route   POST /api/blogs
// @access  Admin
const createBlog = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  const blog = new Blog({
    title,
    content,
    author: req.user._id,
  });

  const createdBlog = await blog.save();
  res.status(201).json(createdBlog);
});

// @desc    Get all blogs
// @route   GET /api/blogs
// @access  Public
const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({}).populate('author', 'name');
  res.json(blogs);
});

// @desc    Update a blog post
// @route   PUT /api/blogs/:id
// @access  Editor/Admin
const updateBlog = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  const blog = await Blog.findById(req.params.id);

  if (blog) {
    blog.title = title;
    blog.content = content;
    blog.updatedAt = Date.now();

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } else {
    res.status(404);
    throw new Error('Blog not found');
  }
});

// @desc    Delete a blog post
// @route   DELETE /api/blogs/:id
// @access  Admin
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    await blog.remove();
    res.json({ message: 'Blog removed' });
  } else {
    res.status(404);
    throw new Error('Blog not found');
  }
});

// @desc    Assign blog to an editor
// @route   PUT /api/blogs/assign/:id
// @access  Admin
const assignBlog = asyncHandler(async (req, res) => {
  const { editorId } = req.body;
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    blog.assignedTo = editorId;
    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } else {
    res.status(404);
    throw new Error('Blog not found');
  }
});

module.exports = {
  createBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
  assignBlog,
};

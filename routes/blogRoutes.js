const express = require('express');
const router = express.Router();
const { createBlog, getBlogs, updateBlog, deleteBlog, assignBlog } = require('../controllers/blogController');
const { protect, admin, editor } = require('../middlewares/authMiddleware');

router.route('/').post(protect, admin, createBlog).get(getBlogs);
router.route('/:id').put(protect, editor, updateBlog).delete(protect, admin, deleteBlog);
router.route('/assign/:id').put(protect, admin, assignBlog);

module.exports = router;

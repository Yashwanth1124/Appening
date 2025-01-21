const asyncHandler = require('express-async-handler');
const Comment = require('../models/Comment');

// @desc    Add a comment to a blog
// @route   POST /api/comments/:blogId
// @access  User
const addComment = asyncHandler(async (req, res) => {
  const { content } = req.body;
  const { blogId } = req.params;

  const comment = new Comment({
    content,
    blog: blogId,
    user: req.user._id,
  });

  const createdComment = await comment.save();
  res.status(201).json(createdComment);
});

// @desc    Delete a comment
// @route   DELETE /api/comments/:id
// @access  User
const deleteComment = asyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.params.id);

  if (comment) {
    if (comment.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error('User not authorized');
    }

    await comment.remove();
    res.json({ message: 'Comment removed' });
  } else {
    res.status(404);
    throw new Error('Comment not found');
  }
});

module.exports = {
  addComment,
  deleteComment,
};

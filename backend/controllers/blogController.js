const Blog = require('../models/Blog');

exports.addBlog(req, res) {
    const blog = new Blog(req.body);
    blog.save();
    res.status(201).json(blog);
}


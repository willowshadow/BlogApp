const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// Get all blogs
router.get('/blog', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a single blog
router.get('/blog:id', async (req, res) => {
    try {
        const blogFound = await Blog.findById(req.params.id);
        if (!blogFound) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(blogFound);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new blog
router.post('/blog', async (req, res) => {
    const blog = new Blog({
        title: req.body.title,
        author: req.body.author,
        text: req.body.text,
        image: req.body.image,
        type: req.body.type,
        minutesToRead: req.body.minutesToRead,
        date: req.body.date
    });
    try {
        const newBlog = await blog.save();
        res.status(201).json(newBlog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a blog
router.put('/blog:id', async (req, res) => {
    try {
        const blogFound = await Blog.findById(req.params.id);
        if (!blogFound) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        Object.assign(blogFound, req.body);
        const updatedBlog = await blogFound.save();
        res.status(200).json(updatedBlog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a blog
router.delete('/blog:id', async (req, res) => {
    try {
        const blogFound = await Blog.findById(req.params.id);
        if (!blogFound) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        await Blog.deleteOne(blogFound);
        res.status(200).json(blogFound);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

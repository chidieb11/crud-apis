const express = require('express')
const router = express.Router()
const Posts = require('../models/Posts')

// To get all the post
router.get('/', (req, res) =>{
    Posts.find()
    .then((resp) => res.status(200).json(resp))
    .catch((err) => res.status(400).json('Request Failed!'))
})

// To create a new Post
router.post('/', (req, res) =>{
    const { title, description } = req.body
    const post = new Posts({
        title, 
        description
    })
    post
    .save()
    .then((resp) => res.status(200).json(resp))
    .catch((err) => res.status(400).json('Request Failed!'))
})

// Delete a specific Post
router.delete('/:id', (req, res) =>{
    Posts.remove({ _id: req.params.id })
    .then((resp) => res.status(200).json(resp))
    .catch((err) => res.status(400).json('Request Failed'))
})

// Delete multiple Posts
router.post('/', (req, res) =>{
    Posts.deleteMany({ _id: list, list: { $in: req.body.list } })
    .then((resp) => res.status(200).json(resp))
    .catch((err) => res.status(400).json('Request Failed!'))
})

// To get a specific Post
router.get('/:id', (req, res) =>{
    Posts.findById(req.params.id)
    .then((resp) => res.status(200).json(resp))
    .catch((err) => res.status(400).json('Request Failed!'))
})

// To upadate a specific Post
router.patch('/:id', (req, res) =>{
    Posts.updateOne({ _id: req.params.id }, { $set: req.body })
    .then((resp) => res.status(200).json(resp))
    .catch((err) => res.status(400).json('Request Failed!'))
})

module.exports = router
const express = require('express');
const multer = require('multer');
const uploadFile = require('./services/storage.services.js');
const postModel = require('./models/post.model.js');

const app = express();

// multer middleware instance
const upload = multer({
    storage: multer.memoryStorage()
})

app.use(express.json()); //listens to json requests, a middleware

app.get('/', (req, res) => {
    res.send("backend is working")
})

app.post('/create-post', upload.single('image'), async (req, res) => {
    
    const result = await uploadFile(req.file.buffer);

    const post = await postModel.create({
    image: result.url,
    caption: req.body.caption
    })
    
    return res.status(200).json({
        message: "post created!",
        post: post
    })
})

module.exports = app;

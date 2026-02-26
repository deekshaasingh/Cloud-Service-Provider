const express = require('express');
const multer = require('multer');
const app = express();

// multer middleware instance
const upload = multer({
    storage: multer.memoryStorage()
})

app.use(express.json()); //listens to json requests, a middleware

app.get('/', (req, res) => {
    res.send("backend is working")
})

app.post('/create-post', upload.single('image'), (req, res) => {
    console.log(req.file)
    console.log(req.body.caption)

    return res.status(200).json({
        message: "something",
    })
})

module.exports = app;

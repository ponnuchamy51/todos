const express = require("express")

const app = express()

const getPost = (req,res) => {
    res.send("Hello Test")
}

app.get('/',getPost)

app.listen("3000")
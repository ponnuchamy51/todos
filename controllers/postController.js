getPost = (req,res) => {
    res.send("Responce From controller")
}

getPostList = (req,res) => {
    res.send("Hello Post List")
}


module.exports = {
    getPost,
    getPostList
}

const express = require("express")

const  postController   = require("../controllers/postController")

const router = express.Router()

router.get('',postController.getPost)
router.get('/list',postController.getPostList)


module.exports = router
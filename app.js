const express = require("express")
const morgan = require("morgan")
const app = express()

const { postRouter }   = require("./routes/index")

const { myMiddleWare } = require("./middlewares/firstMiddleware")


app.use(morgan("dev"))
// Use Middleware common
app.use(myMiddleWare)

// post routes 
app.use('/post', postRouter )


app.listen("8000")
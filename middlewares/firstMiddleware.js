const myMiddleWare = (req,res,next) => {
    console.log("Middleware invoked:" + req)
    next()
}

module.exports = {
    myMiddleWare
}
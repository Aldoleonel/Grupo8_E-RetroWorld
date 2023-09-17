module.exports = (req,res,next) => {
    if(req.cookies.secretaso){
        req.session.userLogin = req.cookies.secretaso
    }
    next()
}
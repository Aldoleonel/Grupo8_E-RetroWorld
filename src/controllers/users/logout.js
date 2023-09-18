module.exports = (req,res)=>{
    req.session.destroy();
    res.cookie('secretaso', null,{
        maxAge : -1
    })
    return res.redirect('/')
}
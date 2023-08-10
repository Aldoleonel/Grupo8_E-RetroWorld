module.exports = {
    index : (req,res)=> {
        return res.render('index')
    },
    admin : (req,res) => {
        return res.render('admin')
    }
}
const moment = require('moment')
const db = require('../../database/models')

module.exports = (req,res)=>{
    const {id} = req.session.userLogin
    const genres = db.Genre.findAll();
    const user = db.User.findByPk(id)

    Promise.all([genres, user])
        .then(([genres, user]) => {
            // return res.send(user)
            return res.render('userProfile',{
                ...user.dataValues,
                genres,
                moment
            })
        })
}
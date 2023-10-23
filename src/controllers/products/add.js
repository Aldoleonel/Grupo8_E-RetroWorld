const db= require('../../database/models')
module.exports=(req,res)=>{
    const categories=db.Category.findAll({
        order:['name']
    })

    const sections=db.Section.findAll({
        order:['name']
    })
    const types= db.Type.findAll({
        order:['name']
    })

    Promise.all([categories,sections,types])
        .then(([categories,sections,types])=>{
            return res.render('productAdd',{
                categories,
                sections,
                types
            })
        }).catch(error=>console.log(error))
}
const db= require('../../database/models')
module.exports=(req,res)=>{
    const products=db.Product.findAll({
        order:['name']
    })

    Promise.all([products])
        .then(([products])=>{
            return res.render('categoryAdd',{
               
                products
            })
        }).catch(error=>console.log(error))
}
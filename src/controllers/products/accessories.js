
const db = require('../../database/models');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports=(req,res)=>{
    db.Product.findAll({
        where: { typeId: '2' }
    })
    .then(accessories => {
        
        return res.render('accessories', {
            accessories,
            toThousand
        });
    }).catch(error=>console.log(error))
}

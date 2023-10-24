
const db = require('../../database/models')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports=(req,res)=>{
    db.Product.findAll({
        where: { typeId: '1' }
    })
    .then(consoles => {
        console.log(consoles);
        return res.render('consoles', {
            consoles,
            toThousand
        });
    })
}

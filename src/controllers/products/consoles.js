
const db = require('../../database/models')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports=(req,res)=>{
    db.Product.findAll()
        .then(products => {
            console.log(products);
            return res.render('consoles',{
                        consoles : products.filter(product => product.type === "consola"),
                        toThousand,
                        
            });
        })
}

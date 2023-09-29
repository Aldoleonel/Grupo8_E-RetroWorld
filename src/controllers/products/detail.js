const { readJSON } = require("../../data/index");

const products= readJSON('products')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports=(req,res)=>{
    const product = products.find(product => product.id === req.params.id);
   /*  return res.send(product) */
    return res.render('detalleDeProducto',{
        
        ...product,
        toThousand
    });
}
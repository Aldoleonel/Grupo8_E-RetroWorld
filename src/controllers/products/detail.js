const db = require('../../database/models');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res) => {
    db.Product.findByPk(req.params.id)
    //const category = db.Category.findAll()
       // Promise.all([product,category])
        .then(product => {
            // const productId = +req.params.id; // Convertir req.params.id a cadena
            // const producto = products.find(product => product.id === productId); // Usar productId en la comparación
            // console.log(...category);
            db.Product.findAll({
                where : { categoryId : product.categoryId},
                order : [['createdAt','DESC']]
            })
            .then(relatedProducts => {

                db.Category.findByPk(product.categoryId)
                    .then(category => { 
                       //return res.send(category)
                        return res.render('detalleDeProducto',{
                            producto: product,
                            toThousand,
                            category,
                            relatedProducts
                        });
            })

                })
                
           
            
        }).catch(error=>console.log(error));
}
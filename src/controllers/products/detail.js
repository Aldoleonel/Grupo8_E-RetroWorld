const db = require('../../database/models');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res) => {
    db.Product.findAll()
        .then(products => {
            const productId = +req.params.id; // Convertir req.params.id a cadena
            const producto = products.find(product => product.id === productId); // Usar productId en la comparación
            console.log(producto);
            return res.render('detalleDeProducto',{
                producto,
                toThousand,
            });
        });
}
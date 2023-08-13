/*Controladores de productos DETALLE_DE_PRODUCTO Y CARRITO_DE_COMPRAS*/

module.exports = {
    detail : (req,res) => {
        return res.render('detalleDeProducto');
    },

    cart : (req,res) => {
        return res.render('carritoDeCompras');
    },
    add : (req,res)=> {
        return res.render('productAdd');
    },
    edit:(req,res)=>{
        return res.render('productEdit')
    }
}
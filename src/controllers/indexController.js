module.exports = {
    index : (req,res)=> {
        return res.render('index')
    },
    admin : (req,res) => {
        return res.render('admin')
    },

    /*Controlador de Carrito de Compras*/
    cart: (req,res)=>{
        return res.render('carritoDeCompras');
    },
}
const { unlinkSync, existsSync } = require("fs");

const db = require('../../database/models')
module.exports = (req, res) => {


  db.Product.findByPk(req.params.id,)
    .then(product=>{
      existsSync(`./public/img/products/${product.image}`) &&
      unlinkSync(`./public/img/products/${product.image}`);
      db.Product.destroy({
        where: {
          id: req.params.id,
        },
      }) 
        .then(() => {
         
          return res.redirect("/admin");
        })
    }).catch((error) => console.log(error));

}
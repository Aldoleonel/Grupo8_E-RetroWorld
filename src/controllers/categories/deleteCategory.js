const { unlinkSync, existsSync } = require("fs");

const db = require('../../database/models')
module.exports = (req, res) => {


  db.Category.findByPk(req.params.id,)
    .then(category=>{
      existsSync(`./public/img/products/${category.image}`) &&
      unlinkSync(`./public/img/products/${category.image}`);
      db.Category.destroy({
        where: {
          id: req.params.id,
        },
      }) 
        .then(() => {
         
          return res.redirect("/admin");
        })
    }).catch((error) => console.log(error));

}
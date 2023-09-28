const { unlinkSync, existsSync } = require("fs");
const { writeJson, readJSON } = require("../../data");

module.exports = (req, res) => {
    const products = readJSON("products");

    const productsModify = products.filter((product) => {
      if (product.id === req.params.id) {
          existsSync(`./public/img/products/${product.image}`) &&
          unlinkSync(`./public/img/products/${product.image}`);
      }

      return product.id !== req.params.id;
    });

    writeJson(productsModify, "products");

    return res.redirect("/admin");
}
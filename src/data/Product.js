const { v4: uuidv4 } = require('uuid');

const Product = function ({name,price,discount,category,type,estado,description}) {

    this.id = uuidv4();
    this.name = name.trim();
    this.price = +price;
    this.discount = +discount;
    this.category=category
    this.type=type,
    this.estado=estado,
    this.description = description.trim();
    this.image = null;
    this.stock=0
   
}

module.exports = Product
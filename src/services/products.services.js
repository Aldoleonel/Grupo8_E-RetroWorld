const { unlinkSync, existsSync } = require("fs");
const db = require('../database/models');
const { execSync } = require("child_process");

const getAllProducts = async(limit, offset) => {
    try {

        const {count, rows} = await db.Product.findAndCountAll({
            attributes : {
                exclude : ['createdAt','updatedAt','categoryId']
            },
            include : [
            {
                association :'category',
                attributes : ['name']
            },
            {
                association: 'type',
                attributes:['name']
            },
            {
                association: 'section',
                attributes:['name']
            }
            ] 
            
        })

        return{
            total : count,
            products : rows
        }

    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message : error.message || 'Error en el servicio de productos'
        };
    }
}

const getProductById = async (id) => {
    try {
        if (!id || isNaN(id)) {
            throw {
               status : 400,
               message : 'ID inexistente o corrupto'
            }
          }


       const product = await db.Product.findByPk(id,{
        attributes : {
            exclude : ['createdAt','updatedAt','categoryId']
        },
        include : [
        {
            association :'category',
            attributes : ['name']
        },
        {
            association :'section',
            attributes : ['name']
        },
        {
            association :'type',
            attributes : ['name']
        },
        

        ] 
       })

       if (!product) {
         throw {
            status : 404,
            message : 'Producto no encontrado'
         }
       }

       return product

    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message : error.message || 'Error en el servicio de productos'
        };
    }
}

const createProduct = async(data) => {
    try {
        
        const newProduct = await db.Product.create(data)

        return newProduct

    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message : error.message || 'Error en el servicio de productos'
        };
    }
}

const updateProduct = async (id, dataProduct) => {
    try {
        const {name, price, description,image, sectionId, categoryId, typeId} = dataProduct

        const product = await db.Product.findByPk(id,{
            attributes : {
                exclude : ["createdAt","updatedAt"]
            },
            include : [
            {
              association : 'section',
              attributes : ['name']  
            },
            {
                association : 'type',
                attributes : ['name']  
              },
            {
                association : 'category',
                attributes : ['name']  
              }
  

        ]
        });

        if (!product) {
            throw {
                status : 400,
                message : 'No existe ningún producto con ese ID'
            };
        }
        
        
        product.name = name?.trim()|| product.name;
        product.price = price || product.price;
        product.description = description.trim()|| product.description;
        product.image = image || product.image;
        product.sectionId = sectionId || product.sectionId;
        product.categoryId = categoryId || product.categoryId;
        product.typeId = typeId || product.typeId;

        await product.save();

        return product

    } catch (error) {
        console.log(error);
        throw {
            status : error.status || 500,
            message : error.message || 'ERROR en el servicio'
        }
    }
}

const deleteProduct = async (id) => {
    try {
        if (isNaN(id)) {
            throw {
                status : 400,
                message : 'ID incorrecto'
            };
        }

        const product = await db.Product.findByPk(id);
        if (!product) {
            throw {
                status : 400,
                message : 'No hay una ningún producto con ese ID'
            };
        }

        const imagePath = `./public/img/products/${product.image}`;
        const imageExists = await existsSync(imagePath)

        if (imageExists) {
            await unlinkSync(imagePath);
        }


        await product.destroy({
            
        })

        return null


        
    } catch (error) {
        console.log(error);
        throw {
            status : error.status || 500,
            message : error.message || 'ERROR en el servicio'
        }
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}
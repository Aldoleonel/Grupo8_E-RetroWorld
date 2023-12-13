const db = require('../database/models');


const getAllCategory = async () => {
    try {
        const categories = await db.Category.findAll({
            include : [
                {
                    association : "product",
                    attributes : ['id','name','price','discount']
                }
            ]
        })
        console.log(categories, 'okaaas');
        // return res.status(200).json({
        //     ok : true,
        //     data :categories
        // })

        return categories


    } catch (error) {
       
        throw {
            status: error.status || 500,
            message : error.message || 'Error en el servicio de categorías'
        };
    }
}

const getCategoryById = async (id) => {
    try {

        if (!id || isNaN(id)) {
            throw {
               status : 400,
               message : 'ID inexistente o corrupto'
            }
          }

          const category = await db.Category.findByPk(id,{
            include : [
                {
                    association : 'product',
                    attributes : ['name']
                }
            ]
          })
          if (!category) {
            throw {
               status : 404,
               message : 'Categoría no encontrada'
            }
          }

          return category
        
    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message : error.message || 'Error en el servicio de categorías'
        };
    }
}

const createCategory = async(data) => {
    try {
        
        const newCategory = await db.Category.create(data)
    
    console.log(newCategory);

        return newCategory

    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message : error.message || 'Error en el servicio de categorías'
        };
    }
}

const updateCategory = async (id,data) => {
    try { 

        const {name} = data

        const category = await db.Category.findByPk(id,{
            attributes : {
                exclude : ["createdAt","updatedAt"]
            },
            include : [
            {
              association : 'product',
              attributes : ['name']  
            }
        ]
        });

        if (!category) {
            throw {
                status : 400,
                message : 'No existe ninguna categoría con ese ID'
            };
        }
        
        category.name = name?.trim()|| category.name;

        await category.save();

        return category

    } catch (error) {
        console.log(error);
        throw {
            status : error.status || 500,
            message : error.message || 'ERROR en el servicio'
        }
    }
}

const deleteCategory = async (id) => {
    try {

        if (isNaN(id)) {
            throw {
                status : 400,
                message : 'ID incorrecto'
            };
        }

        const category = await db.Category.findByPk(id);
        if (!category) {
            throw {
                status : 400,
                message : 'No hay una ninguna categoría con ese ID'
            };
        }

        await db.Product.update(
            {
                categoryId : null,
            },
            {
                where : {
                    categoryId : id,
                     
                }
            }
        )
        await category.destroy({
            
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
    getAllCategory,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}
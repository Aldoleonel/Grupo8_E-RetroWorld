const { validationResult } = require('express-validator');
const { getAllCategory, getCategoryById, createCategory, updateCategory, deleteCategory } = require('../../services/category.services');

module.exports = {
    listCategory : async (req,res) =>{
        try {

            const categories = await getAllCategory()

            return res.status(200).json({ 
                ok : true,
                data : categories.map(category => {
                  return {category,
                  url : `${req.protocol}://${req.get(`host`)}/api/categories/${category.id}`
                  }
                }),
                
                
              })
            
        } catch (error) {
            return res.status(error.status || 500).json({
                ok: false,
                status : error.status || 500,
                error : error.message || 'Lo lamento,hubo un error'
            })

        }
    },

    showCategory : async (req,res) =>{
        try {
            const category = await getCategoryById(req.params.id)
            return res.status(200).json({ 
                ok : true,
                data : {
                    ...category.dataValues,
                }
                
              })
            
        } catch (error) {
            return res.status(error.status || 500).json({
                ok: false,
                status : error.status || 500,
                error : error.message || 'Lo lamento,hubo un error'
            })
        }
    },
   
    createCategory : async (req,res) =>{
        try {
            const errors = validationResult(req);

            if(!errors.isEmpty()){
                let errorsMessages = {};
                let objetErrors = errors.mapped()
 
                 for (const key in objetErrors) {
                 //  errorsMessages.push(objetErrors[key].msg)
                     errorsMessages = {
                         ...errorsMessages,
                         [objetErrors[key]['path']]:objetErrors[key]['msg']
 
                     }
             }
                let error = new Error()
                error.status = 400
                error.message = errorsMessages
 
                throw error
             }

             const data = {
                ...req.body
             }

             const {id} = await createCategory(data);

             const category = await getCategoryById(id)

             return res.status(200).json({
                ok : true,
                data : {
                    ...category.dataValues
                }
            })

        } catch (error) {
            return res.status(error.status || 500).json({
                ok: false,
                status : error.status || 500,
                error : error.message || 'Lo lamento,hubo un error'
            })

        }
    },

    updateCategory : async (req,res) =>{
        try {

            const data = {
                ...req.body
            }
            
            const categoryUpdated = await updateCategory(req.params.id, data);

            return res.status(200).json({
                ok : true,
                message : 'Categoría actualizada con éxito',
                data : categoryUpdated
            })

        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                status :error.status || 500,
                error : error.message || 'Upss, hubo un error'
            })
        }
    },

    deleteCategory : async (req,res) =>{
        try {

            await deleteCategory(req.params.id);
 
             return res.status(200).json({
                 ok : true,
                 message : 'Categoría eliminada con éxito',
                 
             }) 
            
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                status :error.status || 500,
                error : error.message || 'Upss, hubo un error'
            })
        }
    },
}
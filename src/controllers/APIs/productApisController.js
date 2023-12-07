const db = require('../../database/models');

const getAllCategory = async (req,res) => {
    try {

        const categories = await db.Category.findAll({
            include : [
                {
                    association : "products",
                    attributes : ['id','name','price','discount']
                }
            ]
        })
        //console.log(products, 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
        return res.status(200).json({
            ok : true,
            data :categories
        })

    } catch (error) {
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || "Upss, hubo un error"
        })
    }
}

const totalProductInDB = async (req,res) => {
    try {

        const total = await db.Product.count()
        
        return res.status(200).json({
            ok : true,
            data :total
        })

        
    } catch (error) {
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || "Upss, hubo un error"
        })
    }
}


module.exports = {
    getAllCategory,
    totalProductInDB
}
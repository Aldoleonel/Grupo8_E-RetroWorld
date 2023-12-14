const createError = require('http-errors');
const db = require('../../database/models');


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
    totalProductInDB
}
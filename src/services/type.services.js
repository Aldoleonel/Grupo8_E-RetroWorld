const db = require('../database/models');


const getAllTypes = async () => {
    try {
        const types = await db.Type.findAll({
            include : [
                {
                    association : "product",
                    attributes : ['id','name']
                }
            ]
        })
        return types

    } catch (error) {
       
        throw {
            status: error.status || 500,
            message : error.message || 'Error en el servicio de tipos de productos'
        };
    }
}

module.exports = {
    getAllTypes
}
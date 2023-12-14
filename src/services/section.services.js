const db = require('../database/models');


const getAllSections = async () => {
    try {
        const sections = await db.Section.findAll({
            include : [
                {
                    association : "product",
                    attributes : ['id','name']
                }
            ]
        })
        return sections

    } catch (error) {
       
        throw {
            status: error.status || 500,
            message : error.message || 'Error en el servicio de secciones de productos'
        };
    }
}

module.exports = {
    getAllSections
}
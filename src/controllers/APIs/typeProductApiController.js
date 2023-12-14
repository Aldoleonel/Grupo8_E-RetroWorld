const { getAllTypes } = require("../../services/type.services")

module.exports = {
    listTypes : async (req,res) =>{
        try {

            const types = await getAllTypes()

            return res.status(200).json({ 
                ok : true,
                data : types.map(type => {
                  return {type,
                  url : `${req.protocol}://${req.get(`host`)}/api/types/${type.id}`
                  }
                })
                
              })
            
        } catch (error) {
            return res.status(error.status || 500).json({
                ok: false,
                status : error.status || 500,
                error : error.message || 'Lo lamento,hubo un error'
            })

        }
    }
}
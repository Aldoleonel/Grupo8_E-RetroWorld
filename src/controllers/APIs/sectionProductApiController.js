const { getAllSections } = require("../../services/section.services")

module.exports = {
    listSections : async (req,res) =>{
        try {

            const sections = await getAllSections()

            return res.status(200).json({ 
                ok : true,
                data : sections.map(section => {
                  return {section,
                  url : `${req.protocol}://${req.get(`host`)}/api/sections/${section.id}`
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
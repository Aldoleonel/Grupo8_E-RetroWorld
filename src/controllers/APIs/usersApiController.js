const { checkEmail, changeRole, getUsers } = require("../../services/users.services")

module.exports = {
    getusers: async(req,res) =>{
        try {
            const users = await getUsers();
            return res.status(200).json({
                ok:true,
                data:users
            })
        } catch (error) {
            return res.status(error.status || 500).json({
                ok: false,
                status : error.status || 500,
                error : error.message || 'Hubo un error'
            })
        }
    },
    checkEmail: async(req,res) => {
        try {
            const user = await checkEmail(req.query.email)
            return res.status(200).json({
                ok:true,
                data:user?true:false
            })
        } catch (error) {
            return res.status(error.status || 500).json({
                ok: false,
                status : error.status || 500,
                error : error.message || 'Hubo un error'
            })
        }
    },
    changeRole: async(req, res) => {
        try {
            const {roleId} = req.body;
            console.log(req.body, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
            const user = await changeRole(req.params.id, roleId);
            return res.status(200).json({
                ok : true,
                message : 'role actualizado con éxito',
                data : user
            })
        } catch (error) {
            return res.status(error.status || 500).json({
                ok : false,
                status :error.status || 500,
                error : error.message || 'Upss, hubo un error'
            })
        }
    }
}
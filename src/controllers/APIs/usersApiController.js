const db = require('../../database/models')

const checkEmail = async(req,res)=>{
    const email = req.query.email;
    try {
        const user = await db.User.findOne({
            where:{
                email
            }
        })
        
        return res.status(200).json({
            ok:true,
            data:user?true:false
        })
    } catch (error) {
        return res.status(error.status || 500).json({
            ok:false,
            msg:error.message|| "upss ,huo un error"
        })
    }
    
}


const getAllUsers = async (req, res) => {
  try {
    const users = await db.User.findAll();
    
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};


const changeRole =  (req, res) => {
    console.log(req.params.id);
     const { id } = req.params;
     const { newRoleId } = req.body;

  
     try {
       const user =  db.Role.findByPk(id);
       res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};
  
  //     if (!user) {
  //       return res.status(404).json({ error: 'Usuario no encontrado' });
  //     }
  
  //     // Actualizar el roleId del usuario
  //     user.roleId = newRoleId;
  //      user.save();
  
  //     return res.status(200).json({ message: 'Rol del usuario actualizado exitosamente' });
  //   } catch (error) {
  //     console.error('Error al cambiar el rol del usuario:', error);
  //     return res.status(500).json({ error: 'Ha ocurrido un error al cambiar el rol del usuario' });
  //  }
  // };

module.exports ={
    checkEmail,
    getAllUsers,
    changeRole

}
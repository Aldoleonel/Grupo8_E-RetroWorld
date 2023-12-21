const db = require('../database/models')

const getUsers = async() => {
    try {
        const users = await db.User.findAll();
        return users;
    } catch (error) {
        throw {
            status: error.status || 500,
            message : error.message || 'Error en el servicio de usuario'
        };
    }
}

const checkEmail = async(email)=>{
    // const email = email;
    try {
        const user = await db.User.findOne({
            where:{
                email
            }
        })
        return user
    } catch (error) {
        throw {
            status: error.status || 500,
            message : error.message || 'Error en el servicio de usuario'
        };
    }
    
}

const changeRole = async(id, roleId) => {
    try {
        console.log('lelgué hasta acá')
        const user = await db.User.update(
            {
                roleId: roleId
            },
            {
                where: {
                    id
                }
            }
        )
        return user

    } catch (error) {
        throw {
            status: error.status || 500,
            message : error.message || 'Error en el servicio de role'
        };
    }
}



module.exports ={
    getUsers,
    checkEmail,
    changeRole
}
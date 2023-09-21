const multer= require('multer');
const path= require('path');

const storage = multer.diskStorage({
    destination : (req,file,cb) => {
        return cb(null, './public/img/avatar')
    },
    filename : (req, file, cb) => {
        return cb(null, `${Date.now()}_avatar_${path.extname(file.originalname)}`)
    }
})
const avatarMulter = multer({
    storage
})
module.exports = avatarMulter

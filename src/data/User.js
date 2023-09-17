const { v4: uuidv4 } = require('uuid');
const {hashSync} = require('bcryptjs');

const User = function ({firstName,lastName,gender,phone,birthdate,email,password}) {

    this.id = uuidv4();
    this.firstName = firstName.trim();
    this.lastName = lastName.trim();
    this.birthdate = new Date(birthdate)
    this.gender = gender.trim();
    this.phone = phone;
    this.email = email.trim();
    this.password = hashSync(password,10);
    this.category = 'user';
    this.image = null;
}

module.exports = User
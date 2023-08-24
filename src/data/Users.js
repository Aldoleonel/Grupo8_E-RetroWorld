const { writeJson } = require("./index");

const users = writeJson();

const Users = function ({firstName,lastName, birthdate,email,password,category}) {

    this.id = users[users.length -1].id + 1;
    this.firstName = firstName.trim();
    this.lastName = lastName.trim();
    this.birthdate = new Date(birthdate)
    this.email = email.trim();
    this.password = password;
    this.category = category;
    this.image = null;
}

module.exports = Users
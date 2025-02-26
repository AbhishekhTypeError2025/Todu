// read file
const fs = require('node:fs')
const file = '/app/model/test.txt'

const readFile = (file,defaultData=[]) => {
    if (!fs.existsSync(file) || fs.readFileSync(file ,'utf8') === '') {
        fs.writeFileSync(file, JSON.stringify(defaultData, null, 2));
    }
    return JSON.parse(fs.readFileSync(file, 'utf8'));
}

//find index of user in file txt
const findIndexById = (users, userId) => {
    return users.findIndex((it) => it.userId === userId);
}

//find user email exists or not
const findUserEmail = (users, email) => {
    return users.some((it) => it.email == email)
}

//find user for login
const findUserForLogin = (users, user) => {
    return users.find((it) => it.email === user.email && it.password == user.password);
} 

module.exports = {
    readFile,
    findIndexById,
    findUserEmail,
    findUserForLogin,
}
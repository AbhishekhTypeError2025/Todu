const fs = require('fs');
const path = require('node:path');
const express = require("express");
const { findIndexById, readFile, findUserEmail } = require('../utils');
const jwt = require('jsonwebtoken');
const { findUserForLogin } = require('../utils/utils');
const router = express.Router();
const { PRIVATE_KEY } = require('../../config/index');


const file = path.join(__dirname, '../model', 'test.txt');

router.use(express.json())

//signup

const signup = (req, res) => {
    const users = readFile(file);
    
    const index = findIndexById(users, req.body.userId);

    if (index !== -1) {
        return res.status(400).json({ msg: "UserId already exists" });
    }
    
    if (findUserEmail(users, req.body.email)) {
        return res.status(400).json({ msg: "Email is already register" });
    }

    users.push(req.body);
    fs.writeFileSync(file, JSON.stringify(users, null, 2));
    return res.status(201).json({ msg: "Successfully register" });
}

//login
const login = (req, res) => {
    const users = readFile(file);

    const user = findUserForLogin(users, req.body);
    if (!user) {
        return res.status(404).json({ msg: "User not registered" });
    }
    if (user.isDelete === true) {
        return res.status(404).json({ msg: "User is deleted by admin" });
    }

    const token = jwt.sign(user, PRIVATE_KEY);

    return res.status(200).json({ msg: token });

}

//get
const about = (req, res) => {
    const users = readFile(file);
    const index = findIndexById(users, req.user.userId);
    if (users[index].role === 'admin') {
        return res.status(200).json({ info: users });
    }
    return res.status(200).json({ info: users[index] });
}

//delete
const remove = (req, res) => {
    const users = readFile(file);
    const index = findIndexById(users, req.body.userId);
    if (index === -1) {
        return res.status(400).json({ msg: "User does not exists" });
    }
    if (users[index].isDelete === true) {
        return res.status(200).json({ msg: "User already deleted" });
    }
    users[index].isDelete = true;
    fs.writeFileSync(file, JSON.stringify(users, null, 2));
    return res.status(200).json({msg:"User deleted"})
}

module.exports = {
    signup,
    login,
    about,
    remove
}
//Schema validation

const { PRIVATE_KEY } = require("../../config");
const jwt = require('jsonwebtoken');

const validation = (schema) => {
    return async (req, res, next) => {
        try {
            const result = await schema.validateAsync(req.body);
            console.log(result);
            if (!req.value) {
                req.value = {};
            }
            req.value["body"] = result;
            next();
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    } 
}

//verifyAuth 

const verifyAuth = async (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ msg: "token is not given" });
    }

    try {
        const result = await await jwt.verify(token, PRIVATE_KEY);
        req.user = result;
        console.log(result);
        next();
    } catch (error) {
        return res.status(401).json({ msg: "token is invalid" });
    }
}
 
//role
const roleCheck = (roles) => {
    return async (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(404).json({ msg: "Not allow" });
        }
        next();
    }
}

module.exports = {
    validation,
    verifyAuth,
    roleCheck,
}
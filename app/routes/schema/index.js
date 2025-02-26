//Schema
const { header } = require('express/lib/request');
const joi = require('joi');

const schemaForSignup = joi.object({
    name: joi.string().min(5).required(),
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }) .required(),
    password: joi.string().required(),
    userId: joi.string().required(),
    role: joi.string().valid('notAdmin').required(),
    isDeleted:joi.boolean(),
});

const schemaForLogin = joi.object({
    email: joi.string().required(),
    password: joi.string().required(),
})


module.exports = {
    schemaForLogin,
    schemaForSignup,
}
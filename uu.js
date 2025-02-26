const joi = require('joi');

const body = joi.object({
    name:joi.string(),
})
const param = joi.object({
    id:joi.number(),
})
const header = joi.object({
    Authorization:joi.string(),
})

const schemaTest = [body, param, header];

console.log(s);

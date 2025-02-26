const express = require("express");
const fs=require('fs')

const { infoController, controller} = require("../../controller/index.js");
const { validation, verifyAuth, roleCheck } = require("../../middleware/middleware.js");
const { schemaForSignup, schemaForLogin } = require("../schema/index.js");

const router = express.Router();

router.use(express.json());

router.get("/info", infoController.info);
router.post("/signup", validation(schemaForSignup), controller.signup);
router.post("/login", validation(schemaForLogin), controller.login);
router.get('/about', verifyAuth, controller.about);
router.delete('/remove', verifyAuth, roleCheck(['admin']), controller.remove);

module.exports = router;

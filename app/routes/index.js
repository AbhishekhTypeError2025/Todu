const express = require("express");

const v1Routes = require("./v1");

const router = express.Router();

router.use(express.json());

router.use("/", v1Routes);

module.exports = router;
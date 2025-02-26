const dotenv = require("dotenv");

dotenv.config();

console.log(process.env.PORT);

module.exports = {
    PORT: process.env.PORT || 5000,
    PRIVATE_KEY:process.env.PRIVATE_KEY,
};
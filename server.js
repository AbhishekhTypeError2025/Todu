const express = require('express');
const { PORT } = require('./config/index.js');

const app = express();

module.exports = {
    app,
    express,
}

require('./app/startup/index.js');


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

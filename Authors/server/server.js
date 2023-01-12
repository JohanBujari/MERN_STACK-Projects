const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const { urlencoded } = require("express");
app.use(cors());
app.use(express.json(), urlencoded({extended: true}));


require('../server/routes/author.routes')(app);
require('../server/config/author.config');

app.listen(port, () => console.log(`Listening on port: ${port}`));
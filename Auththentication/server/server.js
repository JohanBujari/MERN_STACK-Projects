const express = require("express");
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const cors = require("cors");
const { urlencoded } = require("express");
app.use(cors({credentials:true,origin:"http://localhost:3000"}));
app.use(cookieParser());
app.use(express.json(), urlencoded({extended: true}));

require('../server/config/user.config');
require('../server/routes/user.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
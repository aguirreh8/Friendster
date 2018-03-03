const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const htmlRoutes = require("./routing/htmlRouting.js");
const apiRoutes = require("./routing/apiRouting.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))


app.use('/', htmlRoutes);
app.use('/survey', htmlRoutes);
apiRoutes(app);


app.listen(PORT);
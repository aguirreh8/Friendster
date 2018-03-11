//create dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const htmlRoutes = require("./app/routing/htmlRouting.js");
const apiRoutes = require("./app/routing/apiRouting.js");

// Create express connection, use deployed port or local port
const app = express();
const PORT = process.env.PORT || 3000;

//Use body parser to interact with collected data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Use static files at specified location
app.use(express.static('app/public'))

//Use express.Route for html routing
app.use('/', htmlRoutes);
app.use('/survey', htmlRoutes);
//Use module exports for api routing
apiRoutes(app);


app.listen(PORT);
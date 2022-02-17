const express = require("express");
const middlewares = require("./middlewares");
const routes = require("./routes");

const app = express();

middlewares(app);

app.use("/", routes);

module.exports = app;
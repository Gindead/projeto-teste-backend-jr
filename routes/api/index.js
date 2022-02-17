const routes = require("express").Router({mergeParams: true});
const vendas = require("./vendas");

routes.use("/vendas", vendas);

module.exports = routes;
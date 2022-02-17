const routes = require("express").Router({mergeParams: true});

const comissao = require("../../../controllers/vendas/comissao");

routes.post("/", comissao);

module.exports = routes;
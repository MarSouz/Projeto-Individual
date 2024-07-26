var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.post("/cadastrar/pontos", function (req, res) {
    medidaController.cadastrarPontos(req, res);
});

router.get("/obter/dados", function (req, res) {
    medidaController.obterDados(req, res);
});

router.post("/cadastrar/idade", function (req, res) {
    medidaController.cadastrarIdade(req, res);
});

router.get("/obter/idade", function (req, res) {
    medidaController.obterIdade(req, res);
});

router.post("/cadastrar/tempo", function (req, res) {
    medidaController.cadastrarTempo(req, res);
});

router.get("/obter/tempo", function (req, res) {
    medidaController.obterTempo(req, res);
});

module.exports = router;
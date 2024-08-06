var medidaModel = require("../models/medidaModel");

function cadastrarPontos(req, res) {

var id = req.body.idServer
var pontos = req.body.pontosServer
var tempo = req.body.tempoServer
var atleta = req.body.atletaServer

    medidaModel.cadastrarPontos(id, pontos, tempo, atleta).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function obterDados(req, res) {

    medidaModel.obterDados().then(function (resultado) {
        if (resultado.length > 0) {
            res.json({
                zero: resultado[0].zero,
                um: resultado[0].um,
                dois: resultado[0].dois,
                tres: resultado[0].tres,
                quatro: resultado[0].quatro,
                cinco: resultado[0].cinco,
                seis: resultado[0].seis,
                sete: resultado[0].sete
            });
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function obterIdade(req, res) {

    medidaModel.obterIdade().then(function (resultado) {
        if (resultado.length > 0) {
            res.json({
                zero: resultado[0].Menor18,
                um: resultado[0].de18a24,
                dois: resultado[0].de25a34,
                tres: resultado[0].de35a44,
                quatro: resultado[0].de45a54,
                cinco: resultado[0].de55a64,
                seis: resultado[0].Maior65
                
            });
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function obterTempo(req, res) {

    medidaModel.obterTempo().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function obterAtleta(req, res) {

    medidaModel.obterAtleta().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    cadastrarPontos,
    obterDados,
    obterIdade,
    obterTempo,
    obterAtleta
}
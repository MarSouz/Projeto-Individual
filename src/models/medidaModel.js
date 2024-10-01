var database = require("../database/config");

function cadastrarPontos(pontos, id, tempo) {

    var instrucaoSql = `insert into quiz(pontuacao, fk_usuario, tempo) values
	(${id}, ${pontos}, ${tempo})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Obter os pontos do quizz

function obterDados() {

    var instrucaoSql = `SELECT 
    (select count(*)from quiz WHERE pontuacao = 0) as zero,
    (select count(*)from quiz WHERE pontuacao = 1) as um,
    (select count(*)from quiz WHERE pontuacao = 2)as dois,
    (select count(*)from quiz WHERE pontuacao = 3)as tres,
    (select count(*)from quiz WHERE pontuacao = 4)as quatro,
    (select count(*)from quiz WHERE pontuacao = 5)as cinco,
    (select count(*)from quiz WHERE pontuacao = 6)as seis,
    (select count(*)from quiz WHERE pontuacao = 7)as sete;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

//Obter a idade dos usuário

function obterIdade() {

    var instrucaoSql = `SELECT 
    SUM(CASE WHEN idade < 18 THEN 1 ELSE 0 END) AS Menor18,
    SUM(CASE WHEN idade BETWEEN 18 AND 24 THEN 1 ELSE 0 END) AS de18a24,
    SUM(CASE WHEN idade BETWEEN 25 AND 34 THEN 1 ELSE 0 END) AS de25a34,
    SUM(CASE WHEN idade BETWEEN 35 AND 44 THEN 1 ELSE 0 END) AS de35a44,
    SUM(CASE WHEN idade BETWEEN 45 AND 54 THEN 1 ELSE 0 END) AS de45a54,
    SUM(CASE WHEN idade BETWEEN 55 AND 64 THEN 1 ELSE 0 END) AS de55a64,
    SUM(CASE WHEN idade >= 65 THEN 1 ELSE 0 END) AS Maior65
FROM (
    SELECT 
        YEAR(CURRENT_DATE) - YEAR(dtNasc) AS idade
    FROM 
        usuario
) AS idades;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

//Obter o tempo

function obterTempo() {

    var instrucaoSql = `SELECT 
    u.nome, 
    MIN(q.tempo) AS primeira_tempo
FROM 
    usuario u
JOIN 
    quiz q ON u.id = q.fk_usuario
GROUP BY 
    u.id, u.nome
    ORDER BY
        primeira_tempo ASC
    limit 10;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




module.exports = {
    cadastrarPontos,
    obterDados,
    obterIdade,
    obterTempo,

}

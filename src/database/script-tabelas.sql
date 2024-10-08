CREATE DATABASE BrainSport;

USE BrainSport;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    dtNasc DATE,
    atleta CHAR(3),
	email VARCHAR(50),
	senha VARCHAR(50),
    CONSTRAINT check_atletas CHECK (atleta = 'Sim' OR atleta = 'Nao')
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

CREATE TABLE quiz(
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
	pontuacao FLOAT,
    tempo INT,
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
    );
    
INSERT INTO usuario VALUES
	(DEFAULT, "Marcelo", "2005-02-22", "Sim", "marcelo@gmail.com", "1234");    
    
INSERT INTO  quiz(pontuacao, fk_usuario) VALUES
	(3, 1);
    
SELECT 
(select count(*)from quiz WHERE pontuacao = 0) as zero,
(select count(*)from quiz WHERE pontuacao = 1) as um,
(select count(*)from quiz WHERE pontuacao = 2)as dois,
(select count(*)from quiz WHERE pontuacao = 3)as tres,
(select count(*)from quiz WHERE pontuacao = 4)as quatro,
(select count(*)from quiz WHERE pontuacao = 5)as cinco,
(select count(*)from quiz WHERE pontuacao = 6)as seis,
(select count(*)from quiz WHERE pontuacao = 7)as sete;

SELECT 
    SUM(CASE WHEN FLOOR(DATEDIFF(CURRENT_DATE, dtNasc) / 365) < 18 THEN 1 ELSE 0 END) AS Menor18,
    SUM(CASE WHEN FLOOR(DATEDIFF(CURRENT_DATE, dtNasc) / 365) BETWEEN 18 AND 24 THEN 1 ELSE 0 END) AS de18a24,
    SUM(CASE WHEN FLOOR(DATEDIFF(CURRENT_DATE, dtNasc) / 365) BETWEEN 25 AND 34 THEN 1 ELSE 0 END) AS de25a34,
    SUM(CASE WHEN FLOOR(DATEDIFF(CURRENT_DATE, dtNasc) / 365) BETWEEN 35 AND 44 THEN 1 ELSE 0 END) AS de35a44,
    SUM(CASE WHEN FLOOR(DATEDIFF(CURRENT_DATE, dtNasc) / 365) BETWEEN 45 AND 54 THEN 1 ELSE 0 END) AS de45a54,
    SUM(CASE WHEN FLOOR(DATEDIFF(CURRENT_DATE, dtNasc) / 365) BETWEEN 55 AND 64 THEN 1 ELSE 0 END) AS de55a64,
    SUM(CASE WHEN FLOOR(DATEDIFF(CURRENT_DATE, dtNasc) / 365) >= 65 THEN 1 ELSE 0 END) AS Maior65
FROM 
    usuario;
    
    SELECT 
    u.nome, 
    MIN(q.tempo) AS primeiro_tempo
FROM 
    usuario u
JOIN 
    quiz q ON u.id = q.fk_usuario
GROUP BY 
    u.id, u.nome
ORDER BY 
    primeiro_tempo ASC
LIMIT 10;
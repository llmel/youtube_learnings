// Quando é feito o require, não é necessário indicar caminho se 
// temos a pasta node_modules no diretório do arquivo js.
const express = require("express");

// Atribuindo todo o módulo express para a variável aplicação.
const aplicacao = express();

// Determinando as rotas da aplicação
aplicacao.get("/", function(requisicao,resposta){
    resposta.send("Página principal");
})

aplicacao.get("/outra_pagina", function(requisicao,resposta){
    resposta.send("Outra página");
})

// Este comando faz o mesmo que todo aquele feito sem express, requerendo http.
aplicacao.listen(8080);
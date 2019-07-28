const express = require("express");

const aplicacao = express();

aplicacao.get("/",function(requisicao,resposta){
    resposta.send("Funcionando");
});

aplicacao.listen(8080);
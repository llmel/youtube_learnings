const express = require("express");

var servidor = express();

servidor.get("/", function(requisicao,resposta){
    resposta.sendFile(__dirname + "/site/index.html"); // __dirname indica o caminho do arquivo servidor_http.js
    
});


servidor.listen(8080);
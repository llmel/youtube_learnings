// Carregando o módulo http, que é nativo do node
var http = require("http");   

// Função usada para abrir um servidor http local, na porta 8080
http.createServer(function(req,res){
    res.end("Gerenciador");
}).listen(8080);  
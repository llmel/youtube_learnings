// Conexão com o banco de dados - MySQL

const mysql = require("mysql");

var conexao = mysql.createConnection({
    host:'localhost',
    user:'leo',
    password:'bandtec',
    database:'via_prompt'
})

conexao.connect(function(erro){
    if (erro) {
        console.error('Erro na conexão: ' + erro.stack);
    } else {
        console.log("Conexão realizada com sucesso");
        }
});

conexao.query('select * from users;', function(erro,resultado,campos){
    if (!erro) {
        console.log("Resultado ", resultado);
    } else {
        console.log("Erro ao realizar a consulta");
    }
})
const mysql = require("mysql");

const conexao = mysql.createConnection({
        host:'localhost',
        user:'leo',
        password:'bandtec',
        database:'via_prompt'
    });

// Só testa a conexão
conexao.connect(function(erro){
    if (erro) {
        console.log("Deu ruim " + erro.stack);
        return;  // Funciona como um break dentro de um loop. Ele para a função. Também retorna um valor para a execução de uma função.
    }  
    console.log ("Conectado ao banco com id " + conexao.threadId);
});

module.exports = {
    conexao:conexao
}
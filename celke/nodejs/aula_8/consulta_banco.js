const js_banco = require("./conexao_banco"); 

js_banco.conexao.query('select * from users;',function(erro,resultado){
    if (!erro) {
        console.log("Resultado " + JSON.stringify(resultado));
    } else {
        console.log("Não deu certo");
    }
})

js_banco.conexao.query(`insert into users values('teste','teste@teste.com','test',123)`, function (erro){
    if (!erro) {
        console.log("Usuário cadastrado com sucesso");
    } else {
        console.log("Erro no cadastro");
    }
})
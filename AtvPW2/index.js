// Aqui está a importação o Modulo express;
const express = require('express')

// Intância do Modulo express / modo de iniciar;
const app = express()

// Importando o módulo open
const opn = require('opn');
const readline = require('readline');

// Configs. express
app.use(express.json())

app.use(express.urlencoded({
    extended:true
}))

// Importação das Controllers respectivas;
const categoriaController = require("./controller/CategoriaController")
app.use("/", categoriaController)

const produtoController = require("./controller/ProdutoController")
app.use("/", produtoController)

// Rota padrão
app.get('/', (req, res) => {
    res.send('Página inicial');
});

// Servidor Web de requisições e respostas;
app.listen(3000, () => {
    console.log("API ATIVIDADE ESTÁ RODANDO EM: http://localhost:3000");

    const rl = readline.createInterface( // Criando interface de interação com o usário através do terminal;
        {
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Deseja abrir a página no navegador? (S/n): ', (answer) => { // Questão atribuida a uma arrow function;
        if (answer.trim().toLowerCase() === 's' || answer.trim() === '') {
            opn('http://localhost:3000'); // Abrir a página no navegador
            console.log("Para fechar o processo, aperte CTRL + C") // Dica para encerrar processo
        } else {
            console.log("Você optou por não abrir a página no navegador.");
        }
        rl.close();
    });
});
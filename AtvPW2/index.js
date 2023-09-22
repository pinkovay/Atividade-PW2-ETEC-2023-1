// Aqui está a importação o Modulo express;
const express = require('express')


// Intância do Modulo express / modo de iniciar;
const app = express()

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



// Servidor Web de requisições e respostas;
app.listen(3000, ()=>{
    console.log("API ATIVIDADE ESTÁ RODANDO EM: http://localhost:3000")

    // aqui pretendo criar a opção de abrir diretamente a página pelo terminal, digitando Y/n
})
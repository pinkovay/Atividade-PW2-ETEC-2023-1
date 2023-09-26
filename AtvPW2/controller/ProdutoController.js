// Criar rotas especificadas

// Importando o express;
const express = require("express")
// Importando o representante da tabela Categoria;
const categoriaModel = require("../model/Produto")
// 
const router = express.Router()

// ROTAS

router.post('/produto/cadastrarProduto', (req, res) => {
    res.send('Produto cadastrado com sucesso.');
});

router.get('/produto/listarProduto', (req, res) => {
    res.send('Produto listado com sucesso.');
});

router.put('/produto/alterarProduto', (req, res) => {
    res.send('Produto alterado com sucesso.');
});

router.delete('/produto/excluirProduto', (req, res) => {
    res.send('Produto excluído com sucesso.');
});

module.exports = router;
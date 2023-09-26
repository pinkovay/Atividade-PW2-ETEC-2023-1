// Criar rotas especificadas

// Importando o express;
const express = require("express")
// Importando o representante da tabela Categoria;
const categoriaModel = require("../model/Categoria")
// 
const router = express.Router()

// ROTAS

router.post('/categoria/cadastrarCategoria', (req, res) => {
    res.send('Categoria cadastrada com sucesso.');
});

router.get('/categoria/listarCategoria', (req, res) => {
    res.send('Categoria listada com sucesso.');
});

router.put('/categoria/alterarCategoria', (req, res) => {
    res.send('Categoria alterada com sucesso.');
});

router.delete('/categoria/excluirCategoria', (req, res) => {
    res.send('Categoria excluída com sucesso.');
});

module.exports = router;
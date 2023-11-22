// Importando o express;
const express = require("express") // Importando o representante da tabela Categoria;
const produtoModel = require("../model/Produto")
const router = express.Router()



const {initializeApp} = require('firebase/app');
const firebaseConfig = require('../config/firebaseConfig')
const firebaseApp = initializeApp(firebaseConfig);


// TODO: Continuar configuração do firebase

// ROTAS
router.post('/produto/cadastrarProduto', (req, res) => {

    let { nome_produto,
        valor_produto,
        imagem_produto,
        descricao_produto } = req.body

    console.log(req.body)

    produtoModel.create({
        nome_produto,
        valor_produto,
        imagem_produto,
        descricao_produto
    })

        .then(() => {
            return res.status(201).json({
                errorStatus: false,
                messageStatus: `Produto ${nome_produto} cadastrado com sucesso!`
            })
        })
        .catch((error) => {
            return res.status(500).json({
                errorStatus: true,
                messageStatus: error
            })
        })
});

router.get('/produto/listarProduto', (req, res) => {
    produtoModel.findAll()
        .then((produto) => {
            res.status(200).json({
                errorStatus: false,
                messageStatus: "Os produtos foram listados com exíto!",
                produtos: produto
            })
        })
        .catch((error) => {
            res.status(500).json({
                errorStatus: true,
                messageStatus: error
            })
        })
});

router.put('/produto/alterarProduto/:id', (req, res) => {
    
    produtoModel.update({
        nome_produto: req.body.nome_produto,
        codigo_produto: req.body.codigo_produto,
        valor_produto: req.body.valor_produto,
        imagem_produto: req.body.imagem_produto,
        descricao_produto: req.body.descricao_produto,
    },
        { where: {
            codigo_produto: req.params.id,
        },
    })
    .then((produtoModel) => {
        if (!produtoModel){
            return res.status(404).json({
                errorStatus: true,
                messageStatus: `Produto de código ${id} não encontrado`
            })
        }
    })
    .then(() =>{
        return res.status(201).json({
            errorStatus: false,
            messageStatus: "Produto atualizado com sucesso"
        })
    })
    .catch((error) =>{
        return res.status(500).json({
            errorStatus: true,
            messageStatus: error
        })
    })
});

router.delete('/produto/excluirProduto/:id', (req, res) => {

    let { id } = req.params

    produtoModel.findOne({
        where: { codigo_produto: id }
    })
        .then((produto) => {
            if (!produto) {
                return res.status(404).json({
                    errorStatus: true,
                    messageStatus: `Produto com código ${id} não encontrado!`
                })
            }

            produtoModel.destroy({
                where: { codigo_produto: id }
            })
                .then(() => {
                    return res.status(200).json({
                        errorStatus: false,
                        messageStatus: `Produto ${produto.nome_produto} excluido com sucesso! [Código: ${id}]`,
                    })
                })
                .catch((error) => {
                    return res.status(500).json({
                        errorStatus: true,
                        messageStatus: error
                    })
                })
        })
        .catch((error) => {
            return res.status(500).json({
                errorStatus: true,
                messageStatus: error
            })
        })
});

module.exports = router;
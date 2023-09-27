// Importando o express;
const express = require("express")
// Importando o representante da tabela Categoria;
const categoriaModel = require("../model/Categoria")
// Router 
const router = express.Router()

// ROTAS
router.post('/categoria/cadastrarCategoria', (req, res) => {

    let { nome_categoria, observacoes_categoria } = req.body

    console.log(req.body)

    categoriaModel.create({
        nome_categoria,
        observacoes_categoria
    })

        .then(() => {
            return res.status(201).json({
                errorStatus: false,
                messageStatus: `Categoria ${nome_categoria} cadastrada com sucesso!`
            })
        })
        .catch((error) => {
            return res.status(500).json({
                errorStatus: true,
                messageStatus: error
            })
        })

});

router.get('/categoria/listarCategoria', (req, res) => {
    categoriaModel.findAll()
        .then((categoria) => {
            res.status(200).json({
                errorStatus: false,
                messageStatus: "As categorias foram listadas com exíto!",
                categorias: categoria
            })
        })
        .catch((error) => {
            res.status(500).json({
                errorStatus: true,
                messageStatus: error.messsage
            })
        })
});

router.put('/categoria/alterarCategoria/:id', (req, res) => {
    
    categoriaModel.update({
        nome_categoria: req.body.nome_categoria,
        observacoes_categoria: req.body.observacoes_categoria,
    },
        { where: {
            codigo_categoria: req.params.id,
        },
    })
    .then((categoriaModel) => {
        if (!categoriaModel){
            return res.status(404).json({
                errorStatus: true,
                messageStatus: `Categoria de código ${id} não encontrada`
            })
        }
    })
    .then(() =>{
        return res.status(201).json({
            errorStatus: false,
            messageStatus: "Categoria atualizada com sucesso"
        })
    })
    .catch((error) =>{
        return res.status(500).json({
            errorStatus: true,
            messageStatus: error
        })
    })
});

router.delete('/categoria/excluirCategoria/:id', (req, res) => {

    let { id } = req.params

    categoriaModel.findOne({
        where: { codigo_categoria: id }
    })
        .then((categoria) => {
            if (!categoria) {
                return res.status(404).json({
                    errorStatus: true,
                    messageStatus: `Categoria com código ${id} não encontrada!`
                })
            }

            categoriaModel.destroy({
                where: { codigo_categoria: id }
            })
                .then(() => {
                    return res.status(200).json({
                        errorStatus: false,
                        messageStatus: `Categoria ${categoria.nome_categoria} excluida com sucesso! [Código: ${id}]`,
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
})

module.exports = router;
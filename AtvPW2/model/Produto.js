// arquivo que representa o modelo da tabela "tbl_produto";

const sequelize = require("sequelize")
const connection = require("../database/database")

const Produto = connection.define(
    'tbl_produto',
    {
        codigo_produto: {
            type: sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        // Aqui seria interessante criar um FK;
        nome_produto: {
            type: sequelize.STRING(255),
            allowNull: false
        },
        valor_produto: {
            type: sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        imagem_produto: {
            type: sequelize.STRING(500),
            allowNull: false
        },
        descricao_produto: {
            type: sequelize.TEXT,
            allowNull: false
        }
    }
);


// Sincronização do BD / Cria a tabela caso ela ainda não exista;
Produto.sync({ force: false });

// Importando a const Categoria para uma possível utilização futura;
module.exports = Produto;
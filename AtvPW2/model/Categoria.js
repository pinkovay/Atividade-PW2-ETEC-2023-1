// arquivo que representa o modelo da tabela "tbl_categoria";

// Importando o Modulo de sequelize;

const sequelize = require("sequelize")

// Importando diretamente da conexão com o banco de dados;
const connection = require("../database/database")

const Categoria = connection.define(
    'tbl_categoria', // Tabela em especifico que desejo;
    {
        codigo_categoria:{
            type: sequelize.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        
        nome_categoria:{
            type: sequelize.STRING(255),
            allowNull: false
        },
        observacoes_categoria: {
            type: sequelize.TEXT,
            allowNull: false  
        }
    }
);


// Sincronização do BD / Cria a tabela caso ela ainda não exista;
Categoria.sync({force:false});

// Importando a const Categoria para uma possível utilização futura;
module.exports = Categoria;
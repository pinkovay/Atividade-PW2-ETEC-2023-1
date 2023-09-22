// maneira capaz  de  se  conectar com  o  banco de  dados “atv_pw2”;

// Importação do Modulo sequelize;
const sequelize = require("sequelize")

// Criando conexão com o banco de dados / criando um novo objeto com sequelize;
const connection = new sequelize(
    "atv_pw2", // Nome do BD
    "root", // Usuário do BD
    "", // Este banco não necessita de senha.
    {
        host: "localhost",
        porta: "3306",
        dialect: "mysql",
        timezone: "-03:00" // Fuso horário local
    }  // Objeto JSON com dados para configuração.
) 

// Exportando o objeto / conexão com o BD
module.exports = connection;
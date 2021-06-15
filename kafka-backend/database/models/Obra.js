const sequelize = require("../db");
const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class Obra extends Model {}
Obra.init(
    {
        obraID: {
            type: Sequelize.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            autoIncrement: true,
        },
        tituloObra: {
            type: Sequelize.STRING(255),
            allowNull: false,
            defaultValue: "Libro sin título",
        },
        portadaImg: {
            type: Sequelize.STRING(500),
            allowNull: false,
            defaultValue: "https://mrb.imgix.net/assets/default-book.png",
        },
        autorID: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            references: {
                model: "usuario",
                key: "usuarioID",
            },
        },
        sinopsis: {
            type: Sequelize.TEXT,
            allowNull: true,
        },
        adulto: {
            type: Sequelize.INTEGER(1),
            allowNull: false,
            defaultValue: "0",
        },
        estadoObra: {
            type: Sequelize.INTEGER(1),
            allowNull: false,
            defaultValue: "1",
        },
        exclusivo: {
            type: Sequelize.INTEGER(1),
            allowNull: false,
            defaultValue: "0",
        },
        fechaPublicOriginal: {
            type: "YEAR(4)",
            allowNull: true,
        },
        fechaCreacion: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        },
        fechaModificacion: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        },
    },
    {
        sequelize,
        modelName: "obra",
        freezeTableName: true,
        timestamps: false,
    }
);

Obra.associate = (db) => {};
module.exports = Obra;

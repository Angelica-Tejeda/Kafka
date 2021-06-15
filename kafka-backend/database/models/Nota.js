const sequelize = require("../db");
const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class Nota extends Model {}
Nota.init(
    {
        notaID: {
            type: Sequelize.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            autoIncrement: true,
        },
        usuarioID: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            references: {
                model: "usuario",
                key: "usuarioID",
            },
        },
        seccionID: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "seccion",
                key: "seccionID",
            },
        },
        referencia: {
            type: Sequelize.STRING(20),
            allowNull: false,
        },
        texto: {
            type: Sequelize.STRING(500),
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
        modelName: "nota",
        freezeTableName: true,
        timestamps: false,
    }
);

Nota.associate = (db) => {};
module.exports = Nota;

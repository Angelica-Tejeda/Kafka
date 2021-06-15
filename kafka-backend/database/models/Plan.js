const sequelize = require("../db");
const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class Plan extends Model {}
Plan.init(
    {
        planID: {
            type: Sequelize.INTEGER(11),
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
        nombrePlan: {
            type: Sequelize.STRING(30),
            allowNull: false,
        },
        precio: {
            type: Sequelize.DECIMAL,
            allowNull: false,
        },
        descripcion: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        adelantos: {
            type: Sequelize.INTEGER(1),
            allowNull: false,
        },
        exclusivo: {
            type: Sequelize.INTEGER(1),
            allowNull: false,
        },
        comunidad: {
            type: Sequelize.INTEGER(1),
            allowNull: false,
        },
        colaboracion: {
            type: Sequelize.INTEGER(1),
            allowNull: false,
        },
        otros: {
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
        modelName: "plan",
        freezeTableName: true,
        timestamps: false,
    }
);

Plan.associate = (db) => {};
module.exports = Plan;

const sequelize = require("../db");
const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class SolicitudVerificacion extends Model {}
SolicitudVerificacion.init(
    {
        verificacionID: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            autoIncrement: true,
        },
        verificadorID: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            references: {
                model: "usuario",
                key: "usuarioID",
            },
        },
        usuarioID: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            references: {
                model: "usuario",
                key: "usuarioID",
            },
        },
        estadoSolicitud: {
            type: Sequelize.INTEGER(1),
            allowNull: false,
            defaultValue: "1",
        },
        fechaVerificacion: {
            type: Sequelize.DATE,
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
        modelName: "solicitud_verificacion",
        freezeTableName: true,
        timestamps: false,
    }
);

SolicitudVerificacion.associate = (db) => {};
module.exports = SolicitudVerificacion;

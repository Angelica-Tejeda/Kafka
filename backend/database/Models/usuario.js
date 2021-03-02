const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Usuario extends Model { }
Usuario.init(
    {
        titulo: DataTypes.STRING,
        contenido: DataTypes.TEXT,
        block: DataTypes.BOOLEAN,
        libroId: DataTypes.INTEGER
    }, { sequelize, modelName: "usuario", timestamps: false })

/*Seccion.associate = models => {
    Seccion.belongsTo(models.Libro, {
        foreignKey: {
            allowNull: false
        }
    })

}*/


module.exports = Usuario;

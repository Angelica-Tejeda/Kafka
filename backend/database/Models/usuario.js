const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Usuario extends Model { }
Usuario.init(
    {
        nombre: DataTypes.STRING,
        apellido: DataTypes.STRING
    }, { sequelize, modelName: "usuario", timestamps: false })

/*Seccion.associate = models => {
    Seccion.belongsTo(models.Libro, {
        foreignKey: {
            allowNull: false
        }
    })

}*/


module.exports = Usuario;

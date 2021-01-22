const {Model, DataTypes} = require("sequelize");
const sequelize = require("../db");

class Seccion extends Model{}
Seccion.init({titulo:DataTypes.STRING,
contenido:DataTypes.TEXT,
block:DataTypes.BOOLEAN,
libroId:DataTypes.INTEGER},{sequelize, modelName:"seccion", timestamps:false})

Seccion.associate = models =>{
    Seccion.belongsTo(models.Libro,{
        foreignKey:{
            allowNull: false
        }
    })

}


module.exports = Seccion;

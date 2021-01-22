const {Model, DataTypes} = require("sequelize");
const sequelize = require("../db");

class Libro extends Model{}
Libro.init({titulo:DataTypes.STRING,
fechainicio:DataTypes.DATE,
fechapublicacion:DataTypes.DATE,
genero:DataTypes.STRING,
sipnosis:DataTypes.STRING,
clasificacion:DataTypes.STRING,
idioma:DataTypes.STRING,
publicar:DataTypes.BOOLEAN,
desarrollo:DataTypes.BOOLEAN


},{sequelize, modelName:"libro", timestamps:false});

Libro.associate = models => {
    Libro.hasMany(models.Seccion,{
        onDelete: "cascade"
    })

}

module.exports = Libro;


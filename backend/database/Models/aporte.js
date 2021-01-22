const {Model, DataTypes} = require("sequelize");
const sequelize = require("../db");

class Aporte extends Model{}
Aporte.init({aporte:DataTypes.TEXT,
fecha:DataTypes.DATE},{sequelize, modelName:"aporte", timestamps:false})


module.exports = Aporte;
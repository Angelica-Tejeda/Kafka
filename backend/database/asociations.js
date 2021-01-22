const Libro = require("./Models/libro");
const Seccion = require("./Models/seccion");
const Aporte = require("./Models/aporte");

//Uno a muchos
Libro.hasMany(Seccion,{as: "seccion"});
Seccion.belongsTo(Libro,{foreignKey:"libroId",as:"libro"});

Seccion.hasMany(Aporte,{as: "aporte"});
Aporte.belongsTo(Seccion,{foreignKey:"seccionId",as:"seccion"});
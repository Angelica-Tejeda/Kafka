const express = require('express');
const app = express();
const sequelize = require('./database/db');
const Usuario = require('./database/models/Usuario');

// Configuracion
const PORT = process.env.PORT || 3000;

// Rutas
app.get('/', function (req, res) {

    /*Usuario.create({
        nombreUsuario: "TestUser01",
        email: "testuser01@kafka.com",
        password: "admin",
        nombre: "Test",
        apellido: "User",
        seudonimo: "Usuario de prueba",
        fechaNacimiento: new Date(2000, 1, 1),
        pais: "Ecuador",
        tipoUsuario: 1
    }).then(user => {
        res.json(user);
    });*/
    
    /*Usuario.findAll().then(usuarios => {
        res.json(usuarios);
    });*/

    res.send('Hello World');
});

// Inicialización del servidor
app.listen(PORT, function () {
    console.log(`App en puerto http://localhost:${PORT}`);

    // Conexion a la base de datos
    sequelize.authenticate().then(() => {
        console.log("Conexión a la base de datos establecida correctamente");
    }).catch(error => {
        console.log('Se ha producido un error', error);
    })

});
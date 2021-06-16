const express = require("express");
const app = express();
const sequelize = require("./database/db");
const bodyParser = require("body-parser");

// Configuracion
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use("/api/genero", require("./routes/Genero.routes"));
app.use("/api/obra", require("./routes/Obra.routes"))
app.use("/api/seccion", require("./routes/Seccion.routes"))
app.use("/api/usuario", require("./routes/Usuario.routes"));

// Inicialización del servidor
app.listen(PORT, function () {
    console.log(`App en puerto http://localhost:${PORT}`);

    // Conexion a la base de datos
    sequelize
        .authenticate()
        .then(() => {
            console.log(
                "Conexión a la base de datos establecida correctamente"
            );
        })
        .catch((error) => {
            console.log("Se ha producido un error", error);
        });
});

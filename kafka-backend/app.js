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
app.use("/api/aporte", require("./routes/Aporte.routes"));
app.use("/api/biblioteca", require("./routes/Biblioteca.routes"));
app.use("/api/genero", require("./routes/Genero.routes"));
app.use("/api/genero_fav", require("./routes/GeneroFav.routes"));
app.use("/api/genero_obra", require("./routes/GeneroObra.routes"));
app.use("/api/metodo_pago", require("./routes/MetodoPago.routes"));
app.use("/api/nota", require("./routes/Nota.routes"))
app.use("/api/obra", require("./routes/Obra.routes"))
app.use("/api/plan", require("./routes/Plan.routes"))
app.use("/api/seccion", require("./routes/Seccion.routes"))
app.use("/api/solcitud_verificacion", require("./routes/SolicitudVerificacion.routes"))
app.use("/api/suscripcion", require("./routes/Suscripcion.routes"))
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

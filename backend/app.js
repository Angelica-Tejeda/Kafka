const express = require('express')
const app = express()
const sequelize = require('./database/db');
const PORT = process.env.PORT || 3000
const Libro = require("./database/Models/libro");
const Seccion = require("./database/Models/seccion");
require('./database/asociations');
var cors = require('cors');

app.use(express.json());
app.use(cors());
//app.use(express.urlencoded());



//rutas
app.get('/', (req, res) => {
  Libro.create({
      titulo: "IT",
      fechainicio: Date.now(),
      fechapublicacion: 'NULL',
      genero: 'Terror',
      sipnosis: 'Varios niños de una pequeña ciudad del estado de Maine se alían para combatir a una entidad diabólica que adopta la forma de un payaso y desde hace mucho tiempo emerge cada 27 años para saciarse de sangre infantil.',
      clasificacion: 'mayores de 16 años',
      idioma: 'Español',
      publicado: '0',
      desarrollo: '1'

  }).then(libro=>{
      res.json(libro);
  })
})

app.use("/api/seccion",require("./rutas/seccion.routes"));
app.use("/api/libro",require("./rutas/libro.routes"));


//ejecucion de server
app.listen(PORT, () => {
  console.log(`Servidor desde http://localhost:${PORT}`)
//Conexion force:true borra la tabla
    sequelize.sync({force:false}).then(() => {
        console.log("Conexion a la base de datos exitosa");
    }).catch(error=>{console.log("se produjo un error");

})

})
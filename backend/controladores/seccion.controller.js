const Seccion = require("../database/Models/seccion");


exports.seccion_create = async (req, res) =>{

    Seccion.create({
        titulo: req.body.titulo,
        contenido: req.body.contenido,
        block: req.body.block,
        libroId: req.body.obraid
    }).then(seccion=>{
        res.status(200).json(seccion.libroId);
    }).catch(err =>{
        res.json(err);
    })

}
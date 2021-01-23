const Libro = require("../database/Models/libro");


exports.libro_create = async (req, res) =>{

    Libro.create({
        titulo: req.body.titulo,
        fechainicio: Date.now(),
        fechapublicacion: 'NULL',
        genero: req.body.genero,
        sipnosis: req.body.sinopsis,
        clasificacion: req.body.clasificacion,
        idioma: req.body.idioma,
        publicar: "0",
        desarrollo: "1"
    }).then(libro=>{
        res.status(200).json(libro);
    }).catch(err =>{
        res.json(err);
    })

}

exports.getLibrobyId=async (req, res) =>{
    Libro.findAll({
        where:{
            id: req.params.id
        }
    }).then(libro=>{
        res.status(200).json(libro);
    }).catch(err =>{
        res.json(err);
    })
}

exports.getAllLibros=async (req, res) =>{
    Libro.findAll().then(libros=>{
        res.status(200).json(libros);

    }).catch(err =>{
        res.json(err);
    })
}
const Seccion = require("../database/models/Seccion");

exports.createSeccion = async (req, res) => {
    Seccion.create({
        obraID: req.body.obraID,
        orden: req.body.orden,
    })
        .then((seccion) => {
            res.json(seccion);
        })
        .catch((err) => console.log("error: " + err));
};

exports.getAllSecciones = async (req, res) => {
    Seccion.findAll().then((secciones) => {
        res.json(secciones);
    });
};

exports.getSeccionById = async (req, res) => {
    Seccion.findByPk(req.params.id)
        .then((seccion) => {
            res.json(seccion);
        })
        .catch((err) => console.log("error: " + err));
};

exports.getSeccionesByObra = async (req, res) => {
    Seccion.findAll({
        where: {
            obraID: req.params.obraID,
        },
    })
        .then((seccion) => {
            res.json(seccion);
        })
        .catch((err) => console.log("error: " + err));
};

exports.updateSeccion = async (req, res) => {
    Seccion.update(
        {
            obraID: req.body.obraID,
            tituloSeccion: req.body.tituloSeccion,
            orden: req.body.orden,
            contenido: req.body.contenido,
            estadoSeccion: req.body.estadoSeccion,
        },
        {
            where: {
                seccionID: req.params.id,
            },
        }
    )
        .then((result) => {
            res.json(result);
        })
        .catch((err) => console.log("error: " + err));
};

exports.deleteSeccion = async (req, res) => {
    Seccion.destroy({
        where: {
            seccionID: req.params.id,
        },
    })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => console.log("error: " + err));
};

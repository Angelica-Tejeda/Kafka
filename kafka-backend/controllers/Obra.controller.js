const Obra = require("../database/models/Obra");

exports.createObra = async (req, res) => {
    Obra.create({
        tituloObra: req.body.tituloObra,
        portadaImg: req.body.portadaImg,
        autorID: req.body.autorID,
        sinopsis: req.body.sinopsis,
        adulto: req.body.adulto,
        exclusivo: req.body.exclusivo,
        fechaPublicOriginal: req.body.fechaPublicOriginal,
    })
        .then((obra) => {
            res.json(obra);
        })
        .catch((err) => console.log("error: " + err));
};

exports.getAllObras = async (req, res) => {
    Obra.findAll().then((obras) => {
        res.json(obras);
    });
};

exports.getObraById = async (req, res) => {
    Obra.findByPk(req.params.id)
        .then((obra) => {
            res.json(obra);
        })
        .catch((err) => console.log("error: " + err));
};

exports.getObrasByAutor = async (req, res) => {
    Obra.findAll({
        where: {
            autorID: req.params.autorID,
        },
    })
        .then((obra) => {
            res.json(obra);
        })
        .catch((err) => console.log("error: " + err));
};

exports.updateObra = async (req, res) => {
    Obra.update(
        {
            email: req.body.email,
            password: req.body.password,
            seudonimo: req.body.seudonimo,
            fotoPerfil: req.body.fotoPerfil,
            bio: req.body.bio,
            tipoObra: req.body.tipoObra,
        },
        {
            where: {
                obraID: req.params.id,
            },
        }
    )
        .then((result) => {
            res.json(result);
        })
        .catch((err) => console.log("error: " + err));
};

exports.deleteObra = async (req, res) => {
    Obra.destroy({
        where: {
            obraID: req.params.id,
        },
    })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => console.log("error: " + err));
};

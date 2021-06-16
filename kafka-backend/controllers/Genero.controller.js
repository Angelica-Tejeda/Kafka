const Genero = require("../database/models/Genero");

exports.getAllGeneros = async (req, res) => {
    Genero.findAll().then((generos) => {
        res.json(generos);
    });
};

exports.getGeneroById = async (req, res) => {
    Genero.findByPk(req.params.id).then((genero) => {
        res.json(genero);
    });
};
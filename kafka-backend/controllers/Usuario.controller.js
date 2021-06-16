const Usuario = require("../database/models/Usuario");

exports.createUsuario = async (req, res) => {
    Usuario.create({
        nombreUsuario: req.body.nombreUsuario,
        email: req.body.email,
        password: req.body.password,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fechaNacimiento: req.body.fechaNacimiento,
        pais: req.body.pais,
        tipoUsuario: req.body.tipoUsuario,
    })
        .then((usuario) => {
            res.json(usuario);
        })
        .catch((err) => console.log("error: " + err));
};

exports.getAllUsuarios = async (req, res) => {
    Usuario.findAll()
        .then((usuarios) => {
            res.json(usuarios);
        })
        .catch((err) => console.log("error: " + err));
};

exports.getUsuarioById = async (req, res) => {
    Usuario.findByPk(req.params.id)
        .then((usuario) => {
            res.json(usuario);
        })
        .catch((err) => console.log("error: " + err));
};

exports.getUsuarioByEmail = async (req, res) => {
    Usuario.findOne({
        where: {
            email: req.params.email,
        },
    })
        .then((usuario) => {
            res.json(usuario);
        })
        .catch((err) => console.log("error: " + err));
};

exports.updateUsuario = async (req, res) => {
    Usuario.update(
        {
            email: req.body.email,
            password: req.body.password,
            seudonimo: req.body.seudonimo,
            fotoPerfil: req.body.fotoPerfil,
            bio: req.body.bio,
            tipoUsuario: req.body.tipoUsuario,
        },
        {
            where: {
                usuarioID: req.params.id,
            },
        }
    )
        .then((result) => {
            res.json(result);
        })
        .catch((err) => console.log("error: " + err));
};

exports.deleteUsuario = async (req, res) => {
    Usuario.destroy({
        where: {
            usuarioID: req.params.id,
        },
    })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => console.log("error: " + err));
};

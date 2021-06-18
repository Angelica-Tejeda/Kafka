const Usuario = require("../database/models/Usuario");

exports.getAllUsuarios = async (req, res) => {
    Usuario.findAll().then((usuarios) => {
        res.json(usuarios);
    });
}

exports.createUsuario = async (req, res) => {
    Usuario.create({
        nombre_usuario: req.body.nombre_usuario,
        correo: req.body.correo,
        contrasena: req.body.contrasena,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fecha_nacimiento: req.body.fecha_nacimiento,
        pais: req.body.pais,
        rol: req.body.rol,
    })
        .then((usuario) => {
            res.json(usuario);
        })
        .catch((err) => {
            console.log("error: " + err);
            res.json(err);
        });
};

exports.getAllUsuarios = async (req, res) => {
    Usuario.findAll({
        attributes: { exclude: ["contrasena"] },
    })
        .then((usuarios) => {
            res.json(usuarios);
        })
        .catch((err) => {
            console.log("error: " + err);
            res.json(err);
        });
};

exports.getUsuarioById = async (req, res) => {
    Usuario.findByPk(req.params.id, { attributes: { exclude: ["contrasena"] } })
        .then((usuario) => {
            res.json(usuario);
        })
        .catch((err) => {
            console.log("error: " + err);
            res.json(err);
        });
};

exports.getUsuarioByCorreo = async (req, res) => {
    Usuario.findOne({
        where: { correo: req.params.correo },
        attributes: { exclude: ["contrasena"] },
    })
        .then((usuario) => {
            res.json(usuario);
        })
        .catch((err) => {
            console.log("error: " + err);
            res.json(err);
        });
};

exports.getUsuariosByRol = async (req, res) => {
    Usuario.findAll({
        where: { rol: req.params.rol },
        attributes: { exclude: ["contrasena"] },
    })
        .then((usuarios) => {
            res.json(usuarios);
        })
        .catch((err) => {
            console.log("error: " + err);
            res.json(err);
        });
};

exports.updateUsuario = async (req, res) => {
    Usuario.update(
        {
            correo: req.body.correo,
            contrasena: req.body.contrasena,
            seudonimo: req.body.seudonimo,
            foto: req.body.foto,
            bio: req.body.bio,
            rol: req.body.rol,
        },
        {
            where: { id: req.params.id },
        }
    )
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log("error: " + err);
            res.json(err);
        });
};

exports.deleteUsuario = async (req, res) => {
    Usuario.destroy({
        where: { id: req.params.id },
    })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log("error: " + err);
            res.json(err);
        });
};

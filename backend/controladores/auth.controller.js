const Usuario = require("../database/Models/usuario");

exports.findOne=async (req, res) =>{
    Usuario.findAll({
        where:{
            id: req.params.id
        }
    }).then(usuario=>{
        res.status(200).json(usuario);
    }).catch(err =>{
        res.json(err);
    })
}
exports.findAll=async (req, res) =>{
    Usuario.findAll({
    }).then(usuario=>{
        res.status(200).json(usuario);
    }).catch(err =>{
        res.json(err);
    })
}
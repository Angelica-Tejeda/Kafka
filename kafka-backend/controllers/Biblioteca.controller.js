const Biblioteca = require('../database/models/Biblioteca');

exports.createBiblioteca = async (req, res) => {
  Biblioteca.create({
    usuario: req.body.usuario,
    obra: req.body.obra,
  })
      .then((biblioteca) => {
        res.json(biblioteca);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getAllBibliotecas = async (req, res) => {
  Biblioteca.findAll()
      .then((bibliotecas) => {
        res.json(bibliotecas);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getBibliotecaById = async (req, res) => {
  Biblioteca.findByPk(req.params.id)
      .then((biblioteca) => {
        res.json(biblioteca);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getBibliotecasByUsuario = async (req, res) => {
  Biblioteca.findAll({
    where: {usuario: req.params.usuario},
  })
      .then((bibliotecas) => {
        res.json(bibliotecas);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.updateBiblioteca = async (req, res) => {
  Biblioteca.update(
      {
        oculto: req.body.oculto,
        favorito: req.body.favorito,
        leido: req.params.leido,
      },
      {
        where: {id: req.params.id},
      },
  )
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.deleteBiblioteca = async (req, res) => {
  Biblioteca.destroy({
    where: {id: req.params.id},
  })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

const express = require('express');
const router = express.Router();
const auth = require("../controladores/auth.controller");

router.get("/:user", auth.findOne);
router.get("/:users", auth.findAll);
router.post("/register", auth.findOne); //OJO AQUI FALTA CAMBIAR EL METODO

module.exports = router;
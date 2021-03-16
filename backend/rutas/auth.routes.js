const express = require('express');
const router = express.Router();
const auth = require("../controladores/auth.controller");

router.get("/:user", auth.findOne);
router.post("/register", auth.findOne); //OJO AQUI FALTA CAMBIAR EL METODO
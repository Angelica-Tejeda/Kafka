const express = require("express");
const {Router} = require('express');
const router = Router();
const controller = require("../controllers/Usuario.controller");

router.get("/", controller.getAllUsuarios);
router.post("/", controller.createUsuario);
router.get("/:id", controller.getUsuarioById);
router.patch("/:id", controller.updateUsuario);
router.delete("/:id", controller.deleteUsuario);

module.exports = router;

const express = require("express");
const { Router } = require("express");
const router = Router();
const controller = require("../controllers/Usuario.controller");

router.post("/signup", controller.createUsuario);
router.post("/login", controller.iniciarSesion);
router.get("/", controller.getAllUsuarios);
router.get("/:id", controller.getUsuarioById);
router.get("/correo/:correo", controller.getUsuarioByCorreo);
router.get("/rol/:rol", controller.getUsuariosByRol);
router.patch("/:id", controller.updateUsuario);
router.delete("/:id", controller.deleteUsuario);

module.exports = router;
const express = require("express");
const { Router } = require("express");
const router = Router();
const controller = require("../controllers/Usuario.controller");

router.post("/", controller.createUsuario);
router.get("/", controller.getAllUsuarios);
router.get("/:id", controller.getUsuarioById);
router.get("/email/:email", controller.getUsuarioByEmail);
router.patch("/:id", controller.updateUsuario);
router.delete("/:id", controller.deleteUsuario);

module.exports = router;

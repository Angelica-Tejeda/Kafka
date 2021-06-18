const express = require("express");
const router = express.Router();
const controller = require("../controllers/Usuario.controller");

router.get("/", controller.getAllUsuarios);
router.post("/", controller.createUsuario);
router.get("/", controller.getAllUsuarios);
router.get("/:id", controller.getUsuarioById);
router.get("/correo/:correo", controller.getUsuarioByCorreo);
router.get("/rol/:rol", controller.getUsuariosByRol);
router.patch("/:id", controller.updateUsuario);
router.delete("/:id", controller.deleteUsuario);

module.exports = router;

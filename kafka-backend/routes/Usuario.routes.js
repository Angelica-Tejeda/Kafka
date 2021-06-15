const express = require("express");
const router = express.Router();
const controller = require("../controller/Usuario.controller");

router.get("/", controller.getAllUsuarios);
router.post("/", controller.createUsuario);
router.get("/:id", controller.getUsuarioById);
router.patch("/:id", controller.updateUsuario);
router.delete("/:id", controller.deleteUsuario);

module.exports = router;

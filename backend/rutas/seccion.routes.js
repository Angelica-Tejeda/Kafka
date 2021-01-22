const express = require('express');
const router = express.Router();
const controlS = require("../controladores/seccion.controller");

router.post("/",controlS.seccion_create);



module.exports = router;
const express = require('express');
const router = express.Router();
const controlS = require("../controladores/seccion.controller");

router.post("/",controlS.seccion_create);
router.get("/:id",controlS.get_all_byid);


module.exports = router;
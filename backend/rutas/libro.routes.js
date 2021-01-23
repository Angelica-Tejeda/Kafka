const express = require('express');
const router = express.Router();
const controlL = require("../controladores/libro.controller");

router.post("/",controlL.libro_create);
router.get("/:id",controlL.getLibrobyId);
router.get("/:titulo",controlL.getLibrobyId);
router.get("/",controlL.getAllLibros);



module.exports = router;
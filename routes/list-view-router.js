const express = require("express");
const router = express.Router();

// Ruta para listar las tareas completas
router.get("/completas", (req, res) => {
  // Lógica para obtener y enviar las tareas completas
  res.send("Lista de tareas completas");
});

// Ruta para listar las tareas incompletas
router.get("/incompletas", (req, res) => {
  // Lógica para obtener y enviar las tareas incompletas
  res.send("Lista de tareas incompletas");
});

module.exports = router;

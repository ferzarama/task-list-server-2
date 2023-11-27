const express = require("express");
const router = express.Router();

// Ruta para crear una nueva tarea
router.post("/crear", (req, res) => {
  // Lógica para crear una nueva tarea
  res.send("Nueva tarea creada");
});

// Ruta para eliminar una tarea
router.delete("/eliminar/:id", (req, res) => {
  const taskId = req.params.id;
  // Lógica para eliminar la tarea con el ID taskId
  res.send(`Tarea con ID ${taskId} eliminada`);
});

// Ruta para actualizar una tarea
router.put("/actualizar/:id", (req, res) => {
  const taskId = req.params.id;
  // Lógica para actualizar la tarea con el ID taskId
  res.send(`Tarea con ID ${taskId} actualizada`);
});

module.exports = router;

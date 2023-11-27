const express = require("express");
const app = express();
const listViewRouter = require("./routes/list-view-router");
const listEditRouter = require("./routes/list-edit-router");

// Usar los routers
app.use("/list-view", listViewRouter);
app.use("/list-edit", listEditRouter);

// Resto de la configuración y lógica de tu aplicación...

app.listen(3000, () =>
  console.log("Servidor corriendo en http://localhost:3000")
);

module.exports = app;

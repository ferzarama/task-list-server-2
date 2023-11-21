const express = require("express");
const ejs = require("ejs");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) =>
  res.render("index", { title: "La primera aplicación con Node" })
);
app.get("/about", (req, res) => res.render("about", { title: "Acerca de mí" }));
app.get("/contact", (req, res) =>
  res.render("contact", { title: "Lista de tareas" })
);


app.use(express.static(path.join(__dirname, "public")));

const port = 3000;
app.listen(port, () => {
  console.log("El servidor está escuchando en el puerto", port);
});

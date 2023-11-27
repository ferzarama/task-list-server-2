const express = require("express");
const ejs = require("ejs");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) =>
  res.render("index", { title: "La primera aplicación con Node" })
);
app.get("/Wishes", (req, res) => res.render("Wishes", { title: "Deseos" }));
app.get("/Task", (req, res) => res.render("Task", { title: "Task" }));
app.get("/About", (req, res) => res.render("About", { title: "About" }));
app.get("/Contact", (req, res) => res.render("Contact", { title: "Contact" }));
app.get("/Car", (req, res) => res.render("Car", { title: "Car Test" }));

app.use(express.static(path.join(__dirname, "public")));

const port = 3000;
app.listen(port, () => {
  console.log("El servidor está escuchando en el puerto", port);
});

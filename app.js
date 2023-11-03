const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const user = [
  { id: 1, username: "usuario1", password: "contraseña1" },
  { id: 2, username: "usuario2", password: "contraseña2" },
  { id: 3, username: "usuario3", password: "contraseña3" },
];

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = user.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "credenciales invalidas" });
  }

  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );

  res.json({ token });
});

function verifyToken(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token Inváido " });
    }

    req.user = user;
    next();
  });
}

app.post("/tasks", (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.get("/tasks/:taskId", (req, res) => {
  const taskId = parseInt(req.params.taskId);
  const task = tasks.find((t) => t.id === taskId);

  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: "Tarea no encontrada" });
  }
});

app.put("/tasks/:taskId", (req, res) => {
  const taskId = parseInt(req.params.taskId);
  const updatedTask = req.body;
  const taskIndex = tasks.findIndex((t) => t.id === taskId);

  if (taskIndex !== -1) {
    tasks[taskIndex] = updatedTask;
    res.json(updatedTask);
  } else {
    res.status(404).json({ message: "Tarea no encontrada" });
  }
});

app.delete("/tasks/:taskId", (req, res) => {
  const taskId = parseInt(req.params.taskId);
  const taskIndex = tasks.findIndex((t) => t.id === taskId);

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Tarea no encontrada" });
  }
});

app.get("/tasks/completas", (req, res) => {
  const completedTasks = tasks.filter((t) => t.completed);
  res.json(completedTasks);
});

app.get("/tasks/incompletas", (req, res) => {
  const incompleteTasks = tasks.filter((t) => !t.completed);
  res.json(incompleteTasks);
});


app.get("/", (req, res) => {
  res.send("Bienvenido a la página principal");
});

app.get("/ruta-protegida", verifyToken, (req, res) => {
  res.json({ message: "Ruta protegida, bienvenido" + req.user.username });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});

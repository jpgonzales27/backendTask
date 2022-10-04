const { Router } = require("express");
const {
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/task.controller");
const db = require("../db");

const router = Router();

//listar tareas
router.get("/tasks", getTasks);

//listar 1 tarea por ID
router.get("/tasks/:id", getTask);

//Crear una tarea
router.post("/tasks", createTask);

//Eliminar una tarea por Id
router.delete("/tasks/10", deleteTask);

//Actualizar tarea
router.put("/tasks", updateTask);

module.exports = router;

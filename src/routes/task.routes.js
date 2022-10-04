const { Router } = require("express");
const db = require("../db");

const router = Router();

//listar tareas
router.get("/tasks", async (req, res) => {
  // res.send("listar tareas");
  const result = await db.query("select now()");
  console.log(result);
  res.json(result.rows[0].now);
});

//listar 1 tarea por ID
router.get("/tasks/10", (req, res) => {
  res.send("listar una sola tarea");
});

//Crear una tarea
router.post("/tasks", (req, res) => {
  res.send("crear una tarea");
});

//Eliminar una tarea por Id
router.delete("/tasks/10", (req, res) => {
  res.send("eliminando una tarea");
});

//Actualizar tarea
router.put("/tasks", (req, res) => {
  res.send("actualizando tarea");
});

module.exports = router;

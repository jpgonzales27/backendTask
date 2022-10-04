const db = require("../db");

//listar tareas
const getTasks = async (req, res) => {
  try {
    const result = await db.query("select * from task");
    res.json(result.rows);
  } catch (error) {
    res.json({ error: error.message });
  }
};

//listar 1 tarea por ID
const getTask = (req, res) => {
  res.send("listar una sola tarea");
};

//Crear una tarea
const createTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    const result = await db.query(
      "insert into task (title, description) values ($1,$2) returning *",
      [title, description]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.json({ error: error.message });
  }
  res.send("crear una tarea");
};

//Eliminar una tarea por Id
const deleteTask = (req, res) => {
  res.send("eliminando una tarea");
};

//Actualizar tarea
const updateTask = (req, res) => {
  res.send("actualizando tarea");
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
};

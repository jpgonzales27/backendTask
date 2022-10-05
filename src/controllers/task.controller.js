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
const getTask = async (req, res) => {
  //req.params.id -> obtiene el parametro que mandamos por la url
  try {
    const { id } = req.params;
    const result = await db.query("select * from task where id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.json({ error: error.message });
  }

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
const deleteTask = async (req, res) => {
  const { id } = req.params;
  const result = await db.query("delete from task where id = $1 returning *", [
    id,
  ]);

  if (result.rowCount === 0)
    return res.status(404).send({ message: "task not found" });

  //   res.json(result.rows[0]); // retona 200 y muestra el objeto eliminado
  res.sendStatus(204); // solo retorna 204 cuando elimina
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

const db = require("../db");

//listar tareas
const getTasks = async (req, res, next) => {
  try {
    const result = await db.query("select * from task");
    res.json(result.rows);
  } catch (error) {
    // res.json({ error: error.message });
    next(error);
  }
};

//listar 1 tarea por ID
const getTask = async (req, res, next) => {
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
    // res.json({ error: error.message });
    next(error);
  }
};

//Crear una tarea
const createTask = async (req, res, next) => {
  const { title, description } = req.body;

  try {
    const result = await db.query(
      "insert into task (title, description) values ($1,$2) returning *",
      [title, description]
    );
    res.json(result.rows[0]);
  } catch (error) {
    // res.json({ error: error.message });
    next(error);
  }
};

//Eliminar una tarea por Id
const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await db.query(
      "delete from task where id = $1 returning *",
      [id]
    );

    if (result.rowCount === 0)
      return res.status(404).send({ message: "task not found" });

    //   res.json(result.rows[0]); // retona 200 y muestra el objeto eliminado
    // solo retorna 204 cuando elimina
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

//Actualizar tarea
const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const result = await db.query(
      "update task set title= $1, description= $2 where id = $3 returning *",
      [title, description, id]
    );

    if (result.rows.length === 0)
      return res.status(404).json({
        message: "task not found",
      });

    return res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
};

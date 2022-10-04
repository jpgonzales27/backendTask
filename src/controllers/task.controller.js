//listar tareas
const getTasks = (req, res) => {
  res.send("listar tareas");
};

//listar 1 tarea por ID
const getTask = (req, res) => {
  res.send("listar una sola tarea");
};

//Crear una tarea
const createTask = (req, res) => {
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

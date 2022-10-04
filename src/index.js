const express = require("express");
const morgan = require("morgan"); //morgan nos ayuda a ver los tipos de peticionces q se realizan

const taskRoutes = require("./routes/task.routes");

const app = express();

app.use(morgan("dev"));
app.use(taskRoutes);
app.listen(4000);
console.log("Server listo en el puerto 4000");

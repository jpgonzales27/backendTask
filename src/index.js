const express = require("express");
const morgan = require("morgan"); //morgan nos ayuda a ver los tipos de peticionces q se realizan

const taskRoutes = require("./routes/task.routes");

const app = express();

app.use(morgan("dev"));
//para que express puede entener formato JSON
app.use(express.json());
app.use(taskRoutes);

app.use((error, req, res, next) => {
  return res.json({
    message: error.message,
  });
});

app.listen(4000);
console.log("Server listo en el puerto 4000");

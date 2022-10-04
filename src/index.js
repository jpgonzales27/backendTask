const express = require("express");
const morgan = require("morgan"); //morgan nos ayuda a ver los tipos de peticionces q se realizan

const app = express();

app.use(morgan("dev"));

app.listen(4000);
console.log("Server listo en el puerto 4000");

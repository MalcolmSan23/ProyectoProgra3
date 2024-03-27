const express = require("express");
const morgan = require("morgan");
const path = require("path");
const mysql = require("mysql2");
const cors = require("cors");
const myConnection = require("express-myconnection");
const app = express();

const config = {
  application: {
    cors: {
      server: [
        {
          origin: "localhost:3000",
          credentials: true,
        },
      ],
    },
  },
};

app.use(cors(config.application.cors.server));

// rutas backend
const EmpleadosRoutes = require("./Routes/Empleados");
const TipocapacitacionRoutes = require("./Routes/Tipocapacitacion");
const FacultadRoutes = require("./Routes/Empleados"); 
const TituloRoutes = require("./Routes/Titulo");

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(
  myConnection(
    mysql,
    {
      host: "localhost",
      user: "root",
      password: "admin",
      port: 3306,
      database: "SistemaDeCapacitacion",
    },
    "single"
  )
);
app.use(express.urlencoded({ extended: false }));

var bodyParser = require("body-parser");
app.use(bodyParser.json());

//Rutas Frontend
app.use("/api/empleados", EmpleadosRoutes);
app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get("port"), () => {
  console.log("PUERTO 3000");
});

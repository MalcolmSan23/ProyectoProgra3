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
const EspecialidadRoutes = require("./Routes/Especialidad");
const NiveleduRoutes = require("./Routes/Niveledu");
const CaparecibidaRoutes = require("./Routes/Caparecibida");
const FacultadRoutes = require("./Routes/Facultad");
const NomcentroRoutes = require("./Routes/Nomcentro");
const TipocapacitacionRoutes = require("./Routes/Tipocapacitacion");
const TiponiveleduRoutes = require("./Routes/Tiponiveledu");
const TituloRoutes = require("./Routes/Titulo");

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(
  myConnection(
    mysql,
    {
      host: "localhost",
      user: "root",
      password: "32706777",
      port: 3306,
      database: "Capacitaciones",
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

app.use("/api/especialidad", EspecialidadRoutes);
app.use(express.static(path.join(__dirname,'public')));

app.use("/api/niveledu", NiveleduRoutes);
app.use(express.static(path.join(__dirname,'public')));

app.use("/api/caparecibida", CaparecibidaRoutes);
app.use(express.static(path.join(__dirname,'public')));

app.use("/api/facultad", FacultadRoutes);
app.use(express.static(path.join(__dirname,'public')));

app.use("/api/nomcentro", NomcentroRoutes);
app.use(express.static(path.join(__dirname,'public')));

app.use("/api/tipocapacitacion", TipocapacitacionRoutes);
app.use(express.static(path.join(__dirname,'public')));

app.use("/api/tiponiveledu", TiponiveleduRoutes);
app.use(express.static(path.join(__dirname,'public')));

app.use("/api/titulo", TituloRoutes);
app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get("port"), () => {
  console.log("PUERTO 3000");
});

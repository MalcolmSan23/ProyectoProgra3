const express = require("express");
const morgan = require("morgan");
const path = require("path");
const mysql = require("mysql2");
const cors = require("cors");
const myConnection = require("express-myconnection");
const app = express();
const jwt = require("jsonwebtoken");

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
    secretKey: "claveSistemaCapacitacion", // Clave secreta para firmar los tokens JWT
    usuario: "admin", // Usuario predefinido
    contraseña: "admin123", // Contraseña predefinida
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
      password: "admin",
      port: 3306,
      database: "Capacitaciones",
    },
    "single"
  )
);
app.use(express.urlencoded({ extended: false }));

var bodyParser = require("body-parser");
app.use(bodyParser.json());

// Middleware para verificar el token JWT en las solicitudes
function verifyToken(req, res, next) {
  // Obtener el token JWT de la cabecera de autorización
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ error: "Token no proporcionado" });
  }

  // Verificar el token JWT
  jwt.verify(token, config.application.secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Token inválido" });
    }
    // Si el token es válido, decodificarlo y pasar la información del usuario al siguiente middleware
    req.user = decoded;
    next();
  });
}

// Ruta de inicio de sesión para autenticar usuarios y generar tokens JWT
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Verificar las credenciales del usuario
  if (
    username === config.application.usuario &&
    password === config.application.contraseña
  ) {
    // Credenciales válidas, generar token JWT
    const token = jwt.sign({ username }, config.application.secretKey, {
      expiresIn: "1h",
    });
    res.json({ token });
  } else {
    res.status(401).json({ error: "Credenciales inválidas" });
  }
});


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

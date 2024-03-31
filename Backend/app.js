const express = require("express");
const morgan = require("morgan");
const path = require("path");
const mysql = require("mysql2");
const cors = require("cors");
const myConnection = require("express-myconnection");
const jwt = require("jsonwebtoken");

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
    secretKey: "claveSistemaCapacitacion", // Clave secreta para firmar los tokens JWT
    usuario: "admin", // Usuario predefinido
    contraseña: "admin123", // Contraseña predefinida
  },
};

app.use(cors(config.application.cors.server));

// Rutas backend
const EmpleadosRoutes = require("./Routes/Empleados");

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

// Rutas Frontend
app.use("/api/empleados", EmpleadosRoutes);
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () => {
  console.log("Servidor escuchando en el puerto 3000");
});

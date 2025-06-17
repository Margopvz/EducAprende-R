const express = require("express");
const morgan = require("morgan");
const userRoutes = require("../routes/routes")
const cors = require("cors")

//importar rutas

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json()) // Permite leer JSON en el body
app.use(express.urlencoded({extended: false}));

app.use(cors({
  origin: 'http://localhost:5173', // URL de tu frontend
  credentials: true // si usas cookies o auth
}));
// Rutas
app.use("/", userRoutes)

module.exports = app;
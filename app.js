const express = require("express");
const app = express();
const mail = require("./src/routes/formulario.routes");
const path = require("path");
const cors = require("cors");
const calendar = require("./src/routes/calendario.routes");

const PORT = 3001;

const corsOptions = {
  origin: "*",
  methods: ["POST", "GET", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(mail);
app.use(calendar);

app.use(express.static(path.resolve(__dirname, "front/dist")));

app.use("/public", express.static("public"));

// Maneja cualquier otra ruta con Express
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "front/dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor Express en ejecución en el puerto ${PORT}`);
});

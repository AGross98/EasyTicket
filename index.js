require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para lidar com JSON
app.use(express.json());

// Rota básica de teste
app.get("/", (req, res) => {
  res.send("Bem-vindo ao EasyTicket!");
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

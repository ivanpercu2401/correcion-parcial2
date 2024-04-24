// server.js
const express = require('express');
const mongoose = require('mongoose');
const clientesRouter = require('./routes/clientes');
const pedidosRouter = require('./routes/pedidos');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/restaurante', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Conexión a MongoDB establecida.");
}).catch(err => {
  console.error("Error al conectar a MongoDB:", err);
});

// Rutas de la API
app.use('/api', clientesRouter);
app.use('/api', pedidosRouter);

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});

// server.js

app.use('/api/clientes', clientesRouter);
app.use('/api/pedidos', pedidosRouter);

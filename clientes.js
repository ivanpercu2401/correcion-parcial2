// routes/clientes.js
const express = require('express');
const router = express.Router();
const Cliente = require('../models/cliente');

router.post('/clientes', (req, res) => {
  const cliente = new Cliente(req.body);
  cliente.save()
    .then(cliente => {
      res.json(cliente);
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
    });
});

module.exports = router;

const clientesRouter = require('./routes/clientes');
const pedidosRouter = require('./routes/pedidos');

// routes/pedidos.js
const express = require('express');
const router = express.Router();
const Pedido = require('../models/pedido');

router.post('/pedidos', (req, res) => {
  const pedido = new Pedido(req.body);
  pedido.save()
    .then(pedido => {
      res.json(pedido);
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
    });
});

module.exports = router;

const clientesRouter = require('./routes/clientes');
const pedidosRouter = require('./routes/pedidos');

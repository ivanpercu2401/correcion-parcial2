// models/pedido.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pedidoSchema = new Schema({
  cliente: { type: Schema.Types.ObjectId, ref: 'Cliente' },
  detalles: { type: String, required: true },
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Pedido', pedidoSchema);

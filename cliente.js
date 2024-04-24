// models/cliente.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
  nombre: { type: String, required: true },
  telefono: { type: String, required: true }
});

module.exports = mongoose.model('Cliente', clienteSchema);

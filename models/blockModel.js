const mongoose = require('mongoose');

const UserBlockSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true, unique: true },
  esBloqueado: { type: Boolean, default: false }, // Cambio de `esBloqueado` a `isBlocked`
  motivo: { type: String, default: null }, // Razón del bloqueo
  fechaBloqueo: { type: Date, default: null }, // Fecha en la que fue bloqueado
  fechaDesbloqueo: { type: Date, default: null } // Fecha en la que fue desbloqueado
}, { timestamps: true }); // timestamps agrega automáticamente `createdAt` y `updatedAt`

module.exports = mongoose.model('blockuser', UserBlockSchema);

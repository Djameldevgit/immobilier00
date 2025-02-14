const Users = require('../models/userModel');
const BlockUser = require('../models/blockModel'); // Importar modelo de bloqueos

const userCtrl = {
    // 🔴 Bloquear usuario
    blockUser: async (req, res) => {
        try {
            const { userId } = req.params;
            const { motivo, fechaBloqueo, fechaDesbloqueo, esBloqueado} = req.body;

            if (!userId) {
                return res.status(400).json({ msg: "El ID del usuario es requerido." });
            }

            // Verificar si el usuario existe
            const user = await Users.findById(userId).lean();
            if (!user) {
                return res.status(404).json({ msg: "Usuario no encontrado." });
            }

            // Verificar si ya está bloqueado
            const existingBlock = await BlockUser.findOne({ user: userId });
            if (existingBlock && existingBlock.isBlocked) {
                return res.status(400).json({ msg: "Este usuario ya está bloqueado." });
            }

            // Crear el registro de bloqueo
            const blockRecord = new BlockUser({
                user: userId,
                esBloqueado: true,
                motivo: motivo || "Sin especificar",
                fechaBloqueo: fechaBloqueo || new Date().toISOString(),
                fechaDesbloqueo: fechaDesbloqueo || null
            });

            await blockRecord.save();

            res.json({ 
                msg: "Usuario bloqueado exitosamente.",
                block: blockRecord
            });

        } catch (err) {
            return res.status(500).json({ msg: err.message || "Error al bloquear usuario." });
        }
    },

    // 🟢 Desbloquear usuario
    unblockUser: async (req, res) => {
        try {
            const { userId } = req.params;

            if (!userId) {
                return res.status(400).json({ msg: "El ID del usuario es requerido." });
            }

            // Verificar si el usuario tiene un registro de bloqueo
            const blockRecord = await BlockUser.findOne({ user: userId });
            if (!blockRecord || !blockRecord.esBloqueado) {
                return res.status(404).json({ msg: "Este usuario no está bloqueado." });
            }

            // Actualizar el estado de bloqueo en lugar de eliminar
            blockRecord.esBloqueado = false;
            blockRecord.motivo = ""; // Se limpia el motivo
            blockRecord.fechaDesbloqueo = new Date().toISOString(); // Registrar fecha de desbloqueo
            await blockRecord.save();

            res.json({ msg: "Usuario desbloqueado exitosamente." });

        } catch (err) {
            return res.status(500).json({ msg: err.message || "Error al desbloquear usuario." });
        }
    },

    // 🔍 Obtener todos los usuarios bloqueados
    getUsersBlock: async (req, res) => {
        try {
            const blockedUsers = await BlockUser.find({ esBloqueado: true }) // Solo obtener los bloqueados
                .populate('user', 'username email') // Obtener datos del usuario
                .select('-__v'); // Excluir versión de Mongoose

            res.json({
                blockedUsers,
                total: blockedUsers.length
            });

        } catch (err) {
            return res.status(500).json({ msg: err.message || "Error al obtener usuarios bloqueados." });
        }
    }
};

module.exports = userCtrl;

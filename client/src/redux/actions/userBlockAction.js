import { GLOBALTYPES } from './globalTypes';
import { getDataAPI, patchDataAPI } from '../../utils/fetchData';

export const USER_TYPES_BLOCK = {
    LOADING_USER: 'LOADING_USER',
    BLOCK_USER: "BLOCK_USER",
    UNBLOCK_USER: "UNBLOCK_USER",
    GET_USERS_BLOCK: 'GET_USERS_BLOCK'
};

export const bloquearUsuario = (datosBloqueo) => async (dispatch) => {
    console.log(datosBloqueo)
    try {

        const { user, auth, esBloqueado, motivo, fechaBloqueo, fechaDesbloqueo } = datosBloqueo;

        if (!user || !user._id) {
            throw new Error("El ID del usuario es requerido.");
        }
        if (!auth || !auth.token) {
            throw new Error("El token de autenticación es requerido.");
        }
        if (!motivo) {
            throw new Error("El motivo del bloqueo es requerido.");
        }

        // Petición al backend
        const response = await patchDataAPI(`user/${user._id}/block`, // Ruta correcta en el backend
            {
                esBloqueado,
                motivo,
                fechaBloqueo,
                fechaDesbloqueo: fechaDesbloqueo || null, // Si no hay fecha, enviamos null
            },
            auth.token
        );

        // Actualizar Redux con la respuesta
        dispatch({
            type: USER_TYPES_BLOCK.BLOCK_USER,
            payload: response.data,
        });

        // Notificación de éxito
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { success: "Usuario bloqueado exitosamente" },
        });
    } catch (err) {
        console.error("Error al bloquear usuario:", err);

        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response?.data?.msg || err.message || "Error al bloquear usuario" },
        });
    }
};

export const desbloquearUsuario = ({ user, auth }) => async (dispatch) => {
    try {
        if (!user || !user._id) {
            throw new Error("El ID del usuario es requerido.");
        }
        if (!auth || !auth.token) {
            throw new Error("El token de autenticación es requerido.");
        }

        const response = await patchDataAPI(`user/${user._id}/unblock`, {
            esBloqueado: false,
            motivo: '', // Se limpia el motivo
            fechaBloqueo: null,
            fechaDesbloqueo: new Date().toISOString(), // Registrar la fecha de desbloqueo
        }, auth.token);

        dispatch({
            type: USER_TYPES_BLOCK.UNBLOCK_USER,
            payload: response.data,
        });

        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { success: "Usuario desbloqueado exitosamente" }
        });

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response?.data?.msg || "Error al desbloquear usuario" },
        });
    }
};

export const getBlockedUsers = (token) => async (dispatch) => {
    try {
        dispatch({ type: USER_TYPES_BLOCK.LOADING_USER, payload: true });

        const res = await getDataAPI('users/block', token);
       

        dispatch({
            type: USER_TYPES_BLOCK.GET_USERS_BLOCK,
            payload: { ...res.data, page: 2 } // Esto mantiene paginación si existe
        });

        dispatch({ type: USER_TYPES_BLOCK.LOADING_USER, payload: false });
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response?.data?.msg || "Error al obtener usuarios bloqueados" }
        });
    }
};

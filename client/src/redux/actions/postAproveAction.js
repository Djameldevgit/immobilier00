import { GLOBALTYPES } from './globalTypes'
import { imageUpload } from '../../utils/imageUpload'
import { postDataAPI, getDataAPI, patchDataAPI  } from '../../utils/fetchData'
import { createNotify  } from './notifyAction'
 
export const POST_TYPES_APROVE = {
    CREAR_POST_PENDIENTE: 'CREAR_POST_PENDIENTE',
    LOADING_POST: 'LOADING_POST',
    APROVAR_POST_PENDIENTE: 'APROVAR_POST_PENDIENTE',
    GET_POSTS_PENDIENTES: 'GET_POSTS_PENDIENTES',
   
}

 

export const crearPostPendiente = ({postData, images, auth, socket }) => async (dispatch) => {
    let media = []
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: {loading: true} })
        if(images.length > 0) media = await imageUpload(images)

        const res = await postDataAPI('posts', { postData, images: media }, auth.token)
 

        dispatch({ 
            type: POST_TYPES_APROVE.CREAR_POST_PENDIENTE, 
            payload: {...res.data.newPost, user: auth.user} 
        })

        dispatch({ type: GLOBALTYPES.ALERT, payload: {loading: false} })
        dispatch({ type: GLOBALTYPES.ALERT, payload: {success: res.data.msg} })

        // Notificación
        const msg = {
            id: res.data.newPost._id,
            text: 'added a new post.',
            recipients: res.data.newPost.user.followers,
            url: `/post/${res.data.newPost._id}`,
            title: postData.title, 
            image: media[0]?.url
        }

        dispatch(createNotify({msg, auth, socket}))

        // 🔥 Redirigir a Home después de publicar el post
        
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {error: err.response.data.msg}
        })
    }
}


export const aprovarPostPendiente = ({post, estado, auth}) => async (dispatch) => {
    try {
        dispatch({ type: POST_TYPES_APROVE.LOADING_POST, payload: true });
 
        const res = await patchDataAPI(`aprovarpost/${post._id}/aprovado`, { estado }, auth.token);
        dispatch({
            type: POST_TYPES_APROVE.APROVAR_POST_PENDIENTE,
            payload: res.data,
        });

        dispatch({ type: POST_TYPES_APROVE.LOADING_POST, payload: false });
        dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } });
    } catch (error) {
        console.error("Error en aprobarPostPendiente:", error);
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: error.message || "Error inesperado" },
        });
    }
};


export const getPostsPendientes = (token) => async (dispatch) => {
    try {
        dispatch({ type: POST_TYPES_APROVE.LOADING_POST, payload: true })
        const res = await getDataAPI('posts/pendientes', token)
        
        dispatch({
            type: POST_TYPES_APROVE.GET_POSTS_PENDIENTES,
            payload: {...res.data, page: 2}
        })

        dispatch({ type: POST_TYPES_APROVE.LOADING_POST, payload: false })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {error: err.response.data.msg}
        })
    }
}

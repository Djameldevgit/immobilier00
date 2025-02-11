import { POST_TYPES_APROVE } from '../actions/postAproveAction';
import { EditData } from '../actions/globalTypes'

const initialState = {
    loading: false,
    posts: [],
    result: 0,
    page: 2
}

const postAproveReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_TYPES_APROVE.CREAR_POST_PENDIENTE:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            };
        case POST_TYPES_APROVE.APROVAR_POST_PENDIENTE:
            return {
                ...state,
                posts: EditData(state.posts, action.payload._id, action.payload)
            };

        case POST_TYPES_APROVE.LOADING_POST:
            return {
                ...state,
                loading: action.payload
            };
        case POST_TYPES_APROVE.GET_POSTS_PENDIENTES:
            return {
                ...state,
                posts: action.payload.posts,
                result: action.payload.result,
                page: action.payload.page
            };


        default:
            return state;
    }
}

export default postAproveReducer
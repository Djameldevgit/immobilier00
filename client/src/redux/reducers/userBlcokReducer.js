import { USER_TYPES_BLOCK } from '../actions/userBlockAction';

const initialState = {
    loading: false,
    blockedUsers: [],
};

const userBlockReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_TYPES_BLOCK.LOADING_USER:
            return {
                ...state,
                loading: action.payload,
            };

        case USER_TYPES_BLOCK.BLOCK_USER: {
            const usuarioExiste = state.blockedUsers.some(user => user._id === action.payload._id);
            if (usuarioExiste) return state; // Evitar duplicados

            return {
                ...state,
                blockedUsers: [...state.blockedUsers, action.payload],
            };
        }

        case USER_TYPES_BLOCK.UNBLOCK_USER:
            return {
                ...state,
                blockedUsers: state.blockedUsers.filter(user => user._id !== action.payload._id),
            };

        case USER_TYPES_BLOCK.GET_USERS_BLOCK:
            return {
                ...state,
                blockedUsers: action.payload.blockedUsers || [],
                loading: false,
            };

        default:
            return state;
    }
};

export default userBlockReducer;

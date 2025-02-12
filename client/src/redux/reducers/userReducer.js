import { USER_TYPES } from '../actions/userAction';
import { EditData, DeleteData } from '../actions/globalTypes';

const initialState = {
    loading: false,
    users: [],
    denuncias: [],
    activeLast24hUsers: [],
    activeLast3hUsers: [],
    counttotal: 0,
    result: 0,
    page: 2,
    blockedUsers: [],
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_TYPES.LOADING_USER:
            return {
                ...state,
                loading: action.payload,
            };

        case USER_TYPES.GET_TOTAL_USERS_COUNT:
            return {
                ...state,
                counttotal: action.payload,
            };

        case USER_TYPES.GET_USERS:
            return {
                ...state,
                users: action.payload.users,
                result: action.payload.result,
                page: action.payload.page,
            };

        case USER_TYPES.UPDATE_USER:
            return {
                ...state,
                users: EditData(state.users, action.payload._id, action.payload),
            };

        case USER_TYPES.DELETE_USER:
            return {
                ...state,
                users: DeleteData(state.users, action.payload._id),
            };

        case USER_TYPES.GET_ACTIVE_USERS_LAST_24H:
            return {
                ...state,
                activeLast24hUsers: Array.isArray(action.payload) ? action.payload : [],
                result: action.payload.result,
                page: action.payload.page,
            };

        case USER_TYPES.GET_ACTIVE_USERS_LAST_3H:
            return {
                ...state,
                activeLast3hUsers: Array.isArray(action.payload) ? action.payload : [],
                result: action.payload.result,
                page: action.payload.page,
            };

        case 'BLOCK_USER':
            return {
                ...state,
                users: state.users.map((user) =>
                    user._id === action.payload._id ? { ...user, ...action.payload } : user
                ),
                blockedUsers: [...state.blockedUsers, action.payload],
            };

        case 'UNBLOCK_USER':
            return {
                ...state,
                users: state.users.map((user) =>
                    user._id === action.payload._id ? { ...user, ...action.payload } : user
                ),
                blockedUsers: state.blockedUsers.filter((user) => user._id !== action.payload._id),
            };

        case USER_TYPES.UPDATE_USER_STATUS:
            return {
                ...state,
                users: state.users.map((user) =>
                    user._id === action.payload.userId
                        ? { ...user, status: action.payload.newStatus }
                        : user
                ),
            };

        case USER_TYPES.CREAR_DENUNCIA:
            return {
                ...state,
                denuncias: [action.payload, ...state.denuncias],
                loading: false,
            };

        case USER_TYPES.GET_DENUNCIAS:
            return {
                ...state,
                denuncias: action.payload,
            };

        default:
            return state;
    }
};

export default userReducer;

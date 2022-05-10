import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            let stateCopy = { ...state };
            stateCopy = { ...action.data };

            return stateCopy;

        default:
            return state;
    }
}

export const setAuthUserDataActionCreator = (userId, email, login, isAuth) => {
    return { type: SET_AUTH_USER_DATA, data: { userId, email, login, isAuth } }
}
export const setAuthUserDataThunkCreator = () => {

    return (dispatch) => {
        authAPI.auth().then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setAuthUserDataActionCreator(id, email, login, true));
            }
        })
    }
}

export const LoginThunkCreator = (login, password, rememberMe) => {
    return async (dispatch) => {
        let data = await authAPI.login(login, password, rememberMe);
        if (data.resultCode === 0) {
            dispatch(setAuthUserDataThunkCreator());
        }
    }
}
export const LogoutThunkCreator = () => {
    return async (dispatch) => {
        let data = await authAPI.logout();
        if (data.resultCode === 0) {
            dispatch(setAuthUserDataActionCreator(null, null, null, false));
        }
    }
}

export default authReducer;
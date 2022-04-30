import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';

let initialState = {
    userId: null,
    email:null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_AUTH_USER_DATA:
            let stateCopy = {...state};
            stateCopy = {...action.data};
            stateCopy.isAuth = true;
    
            return stateCopy;

        default:
            return state;
    }
}

export const setAuthUserDataActionCreator = (userId, email, login) => {
    return {type: SET_AUTH_USER_DATA, data: {userId, email, login}}
}
export const setAuthUserDataThunkCreator = () => {

    return (dispatch) => {
        authAPI.auth().then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setAuthUserDataActionCreator(id, email, login));
            }
        })
    }
}  

export default authReducer;
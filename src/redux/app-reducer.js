import { setAuthUserDataThunkCreator } from "./auth-reducer";
const SET_INITIALIZED = 'SET-INITIALIZED';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_INITIALIZED:
            let stateCopy = {...state};
            stateCopy.initialized = action.initialized;
            
            return stateCopy;

        default:
            return state;
    }
}

export const setInitializedActionCreator = (initialized) => {
    return {type: SET_INITIALIZED, initialized: initialized}
}


export const setInitializedThunkCreator = () => {
    return (dispatch) =>{
        let promise = dispatch(setAuthUserDataThunkCreator());

        Promise.all([promise]).then(()=>{
            dispatch(setInitializedActionCreator(true));
        })


    }
}

export default appReducer;
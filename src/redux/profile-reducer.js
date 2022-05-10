import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    posts: [
        { id: '1', name: 'Михаил Максименко', text: 'Привет, как дела?', like: '5', time: '9:30' },
        { id: '2', name: 'Алёна Куликова', text: 'Привет, как дела?', like: '5', time: '9:30' },
        { id: '3', name: 'Александр Басов', text: 'Привет, как дела?', like: '5', time: '9:30' },
        { id: '4', name: 'Александр Морозов', text: 'Привет, как дела?', like: '5', time: '9:30' },
        { id: '5', name: 'Наталья Колотвинова', text: 'Привет, как дела?', like: '5', time: '9:30' },
        { id: '6', name: 'Иван Реусов', text: 'Привет, как дела?', like: '5', time: '9:30' }
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = { id: '6', name: 'Иван Реусов', text: action.text, like: '5', time: '9:30' };

            let stateCopy = { ...state };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            return stateCopy;
        }
        case SET_PROFILE: {
            let stateCopy = { ...state };
            stateCopy.profile = action.profile;

            return stateCopy;
        }
        case SET_STATUS: {
            let stateCopy = { ...state };
            stateCopy.status = action.status;

            return stateCopy;
        }
        default: {
            return state;
        }
    }
}

export const addPostActionCreator = (text) => {
    return { type: ADD_POST, text:text };
};
export const setProfileActionCreator = (profile) => {
    return { type: SET_PROFILE, profile: profile };
};
export const setStatusActionCreator = (status) => {
    return { type: SET_STATUS, status: status };
};

export const getProfileThunkCrator = (userId) => {
    return (dispatch) => {
        dispatch(setProfileActionCreator(null));
        profileAPI.getProfile(userId).then(data => {
            dispatch(setProfileActionCreator(data));
        })
    }
}
export const getStatusThunkCrator = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatusActionCreator(data));
        })
    }
}
export const updateStatusThunkCrator = (status) => {
    return (dispatch) => {
        profileAPI.setStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatusActionCreator(status));
            }
        })
    }
}

export default profileReducer;
import {applyMiddleware, combineReducers, createStore } from 'redux';
import authReducer from './auth-reducer';
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from './users-reducer';
import thunkMiddleWare from 'redux-thunk';

let reducers = combineReducers(
    {
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        usersPage: usersReducer,
        auth: authReducer
    }
);

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;
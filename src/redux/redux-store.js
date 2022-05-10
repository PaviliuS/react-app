import {applyMiddleware, combineReducers, createStore } from 'redux';
import authReducer from './auth-reducer';
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from './users-reducer';
import thunkMiddleWare from 'redux-thunk';
import appReducer from './app-reducer';
import { compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let reducers = combineReducers(
    {
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        usersPage: usersReducer,
        auth: authReducer,
        app: appReducer,
    }
);

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

export default store;
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        dialogs: [
            { id: '1', name: 'Михаил Максименко', message: 'Привет, как дела?' },
            { id: '2', name: 'Алёна Куликова', message: 'Привет, как дела?' },
            { id: '3', name: 'Александр Басов', message: 'Привет, как дела?' },
            { id: '4', name: 'Александр Морозов', message: 'Привет, как дела?' },
            { id: '5', name: 'Наталья Колотвинова', message: 'Привет, как дела?' },
            { id: '6', name: 'Иван Реусов', message: 'Привет, как дела?' }
        ],
        messages: [
            { id: '1', name: 'Михаил Максименко', text: 'Привет, как дела?', time: '9:30' },
            { id: '2', name: 'Михаил Максименко', text: 'Привет, как дела?', time: '9:30' },
            { id: '3', name: 'Михаил Максименко', text: 'Привет, как дела?', time: '9:30' },
            { id: '4', name: 'Михаил Максименко', text: 'Привет, как дела?', time: '9:30' },
            { id: '5', name: 'Михаил Максименко', text: 'Привет, как дела?', time: '9:30' },
            { id: '6', name: 'Михаил Максименко', text: 'Привет, как дела?', time: '9:30' },
            { id: '1', name: 'Михаил Максименко', text: 'Привет, как дела?', time: '9:30' },
            { id: '2', name: 'Михаил Максименко', text: 'Привет, как дела?', time: '9:30' },
            { id: '3', name: 'Михаил Максименко', text: 'Привет, как дела?', time: '9:30' },
            { id: '4', name: 'Михаил Максименко', text: 'Привет, как дела?', time: '9:30' },
            { id: '5', name: 'Михаил Максименко', text: 'Привет, как дела?', time: '9:30' },
            { id: '6', name: 'Михаил Максименко', text: 'Привет, как дела?', time: '9:30' }
        ],
        newMessageText: '',

        posts: [
            { id: '1', name: 'Михаил Максименко', text: 'Привет, как дела?', like: '5', time: '9:30' },
            { id: '2', name: 'Алёна Куликова', text: 'Привет, как дела?', like: '5', time: '9:30' },
            { id: '3', name: 'Александр Басов', text: 'Привет, как дела?', like: '5', time: '9:30' },
            { id: '4', name: 'Александр Морозов', text: 'Привет, как дела?', like: '5', time: '9:30' },
            { id: '5', name: 'Наталья Колотвинова', text: 'Привет, как дела?', like: '5', time: '9:30' },
            { id: '6', name: 'Иван Реусов', text: 'Привет, как дела?', like: '5', time: '9:30' }
        ],
        newPostText: '',
    },
    getState() {
        return this._state;
    },

    _renderTree() {
        console.log('Hello');
    },

    subscribe(observer){
        this._renderTree = observer;
    },

    dispatch(action){
        this._state = dialogsReducer(this._state, action);
        this._state = profileReducer(this._state, action);
        this._renderTree(this);
    }
};

export default store;
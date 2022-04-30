const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE:{
            let newMessage = { id: '1', name: 'Михаил Максименко', text: state.newMessageText, time: '9:45' };

            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_MESSAGE_TEXT:{
            let stateCopy = {...state};
            stateCopy.newMessageText = action.text;
            return stateCopy;          
        }
        default:{
            return state;      
        }
    }
}

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE};
};
export const updateMessageTextActionCreator = (text) => {
    return {type: UPDATE_MESSAGE_TEXT, text: text};
};

export default dialogsReducer;
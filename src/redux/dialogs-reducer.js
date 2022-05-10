const ADD_MESSAGE = 'ADD-MESSAGE';

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
        { id: '7', name: 'Михаил Максименко', text: 'Привет, как дела?', time: '9:30' },
        { id: '8', name: 'Михаил Максименко', text: 'Привет, как дела?', time: '9:30' },
        { id: '9', name: 'Михаил Максименко', text: 'Привет, как дела?', time: '9:30' },
        { id: '10', name: 'Михаил Максименко', text: 'Привет, как дела?', time: '9:30' },
        { id: '11', name: 'Михаил Максименко', text: 'Привет, как дела?', time: '9:30' },
        { id: '12', name: 'Михаил Максименко', text: 'Привет, как дела?', time: '9:30' }
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE:{
            let newMessage = { id: '1', name: 'Михаил Максименко', text: action.message, time: '9:45' };

            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            return stateCopy;
        }
        default:{
            return state;      
        }
    }
}

export const addMessageActionCreator = (message) => {
    return {type: ADD_MESSAGE, message: message};
};

export default dialogsReducer;
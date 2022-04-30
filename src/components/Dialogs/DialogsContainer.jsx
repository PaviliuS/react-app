import Dialogs from './Dialogs';
import {addMessageActionCreator, updateMessageTextActionCreator} from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';

// Пример кода до реализации react-redux
// const Dialogs = (props) => {
//     let dialogsElements = props.store.getState().dialogsPage.dialogs.map(element => {
//         return <Dialog id={element.id} name={element.name} message={element.message}></Dialog>;
//     });
//     let messagesElements = props.store.getState().dialogsPage.messages.map(element => {
//         return <Message name={element.name} text={element.text} time={element.time}></Message>;
//     });
//     let newMessageElement = React.useRef();
//     let onMessageChange = () => {
//         props.store.dispatch(updateMessageTextActionCreator(newMessageElement.current.value));
//     };
//     return (     
//     );
// }

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        onMessageChange: (text) => {
            dispatch(updateMessageTextActionCreator(text));
        },
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
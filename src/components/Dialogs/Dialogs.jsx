import stl from './Dialogs.module.scss';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import MessageForm from './MessageForm/MessageForm';
import React from 'react';
import { Navigate } from 'react-router-dom';


const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(element => {
        return <Dialog id={element.id} name={element.name} message={element.message}></Dialog>;
    });

    let messagesElements = props.messages.map(element => {
        return <Message name={element.name} text={element.text} time={element.time}></Message>;
    });

    // let addMessage = () => {
    //     props.addMessage();
    // };

    // let newMessageElement = React.useRef();
    // let onMessageChange = () => {
    //     props.onMessageChange(newMessageElement.current.value)
    // };
    if (props.isAuth === false) return (<Navigate to='/login'></Navigate>);

    return (
        <header className={stl.dialogs}>
            <div className={stl.dialogs__content}>
                <div className={stl.dialogs__dialogsDIV}>
                    <div className={stl.dialogs__dialogs}>
                        {dialogsElements}
                    </div>
                </div>

                <div className={stl.dialogs__messagesDIV}>
                    <div className={stl.dialogs__messages}>
                        {messagesElements}
                    </div>
                    <MessageForm  newMessageText={props.newMessageText} onMessageChange={props.onMessageChange} addMessage={props.addMessage}></MessageForm>
                </div>
            </div>
        </header>
    );
}

export default Dialogs;
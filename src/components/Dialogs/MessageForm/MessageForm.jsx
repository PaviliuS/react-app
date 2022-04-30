import stl from './MessageForm.module.scss';
import React from 'react';

const MessageForm = (props) => {
    let newMessageElement = React.useRef();

    return (
        <div className={stl.messageForm}>
            <textarea ref={newMessageElement} value={props.newMessageText} onChange={() => props.onMessageChange(newMessageElement.current.value)} placeholder='Сообщение'>
            </textarea>
            <button onClick={props.addMessage}>
                SEND
            </button>
        </div>
    );
}

export default MessageForm;
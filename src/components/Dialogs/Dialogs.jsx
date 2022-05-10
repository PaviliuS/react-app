import stl from './Dialogs.module.scss';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import MessageForm from './MessageForm/MessageForm';
import React from 'react';


const Dialogs = ({dialogs, messages, addMessage}) => {
    let dialogsElements = dialogs.map(element => {
        return <Dialog key={`dialog${element.id}`} id={element.id} name={element.name} message={element.message}></Dialog>;
    });

    let messagesElements = messages.map(element => {
        return <Message key={`message${element.id}`} name={element.name} text={element.text} time={element.time}></Message>;
    });

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
                    <MessageForm addMessage={addMessage}></MessageForm>
                </div>
            </div>
        </header>
    );
}

export default Dialogs;
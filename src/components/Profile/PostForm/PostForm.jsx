import stl from './PostForm.module.scss';
import React from 'react';

const MessageForm = (props) => {
    let newPostElement = React.useRef();
    return (
        <div className={stl.postForm}>
            <textarea ref={newPostElement} value={props.newPostText} onChange={()=>props.onPostChange(newPostElement.current.value)} placeholder='Сообщение'>
            </textarea>
            <button onClick={props.addPost}>
                SEND
            </button>
        </div>
    );
}

export default MessageForm;
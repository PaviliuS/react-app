import stl from './Message.module.scss';

const Message = (props) => {
    return (
        <div className={stl.message}>
            <div className={stl.message__user}>{props.name}</div>
            <div className={stl.message__text}>{props.text}</div>
            <div className={stl.message__time}>{props.time}</div>
        </div>
    );
}

export default Message;
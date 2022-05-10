import stl from './Message.module.scss';

const Message = ({name,text,time}) => {
    return (
        <div className={stl.message}>
            <div className={stl.message__user}>{name}</div>
            <div className={stl.message__text}>{text}</div>
            <div className={stl.message__time}>{time}</div>
        </div>
    );
}

export default Message;
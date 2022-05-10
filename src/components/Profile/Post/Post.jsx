import stl from './Post.module.scss';

const Message = ({name,text,time}) => {
    return (
        <div className={stl.post}>
            <div className={stl.post__user}>{name}</div>
            <div className={stl.post__text}>{text}</div>
            <div className={stl.post__time}>{time}</div>
        </div>
    );
}

export default Message;
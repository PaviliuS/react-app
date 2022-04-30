import stl from './Post.module.scss';

const Message = (props) => {
    return (
        <div className={stl.post}>
            <div className={stl.post__user}>{props.name}</div>
            <div className={stl.post__text}>{props.text}</div>
            <div className={stl.post__time}>{props.time}</div>
        </div>
    );
}

export default Message;
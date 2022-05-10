import { NavLink } from 'react-router-dom';
import stl from './User.module.scss';

const User = (props) => {
    return (

        <div className={stl.item}>
            <NavLink to={'/profile/' + props.user.id}>
                <div className={stl.item__img}>
                    <img src={props.user.photos.small || 'https://cdn-icons-png.flaticon.com/512/56/56745.png'} alt='image1'></img>
                </div>
            </NavLink>
            <div className={stl.item__info}>
                <div className={stl.item__name}>{props.user.name}</div>
                <div className={stl.item__status}>{props.user.status}</div>
            </div>

            <div className={stl.item__location}>
                <div className={stl.item__country}></div>
                <div className={stl.item__city}></div>
            </div>

            <div className={stl.item__button}>
                {props.user.followed
                    ?
                    <button disabled={props.isFollowing.some(id => id === props.user.id)} onClick={() => {
                        props.unfollow(props.user.id);
                    }

                    }>UNFOLLOW</button>
                    :
                    <button disabled={props.isFollowing.some(id => id === props.user.id)} onClick={() => {
                        props.follow(props.user.id);
                    }
                    }>FOLLOW</button>
                }
            </div>
        </div>

    );
}

export default User;
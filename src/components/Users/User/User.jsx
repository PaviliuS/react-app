import { NavLink } from 'react-router-dom';
import stl from './User.module.scss';
import * as axios from 'axios';

const User = (props) => {
    return (

        <div className={stl.item}>
            <NavLink to={'/profile/' + props.user.id}>
                <div className={stl.item__img}>
                    <img src='https://bigpicture.ru/wp-content/uploads/2015/11/nophotoshop29-800x532.jpg' alt='image1'></img>
                </div>
            </NavLink>
            <div className={stl.item__info}>
                <div className={stl.item__name}>{props.user.name}</div>
                <div className={stl.item__status}>{'props.user.status'}</div>
            </div>

            <div className={stl.item__location}>
                <div className={stl.item__country}>{'props.user.country'}</div>
                <div className={stl.item__city}>{'props.user.city'}</div>
            </div>

            <div className={stl.item__button}>
                {props.user.followed
                    ?
                    <button disabled={props.isFollowing.some(id => id === props.user.id)} onClick={() => {
                        // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`,{ withCredentials: true, headers:{"API-KEY":"008538ca-ec18-4d06-8a91-fc8fa3eda943"} }).then(response => {
                        //     if (response.data.resultCode === 0) {
                        //         props.unfollow(props.user.id)
                        //     }
                        // });

                        props.unfollow(props.user.id);
                    }

                    }>UNFOLLOW</button>
                    :
                    <button disabled={props.isFollowing.some(id => id === props.user.id)} onClick={() => {

                        // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`, {}, { withCredentials: true, headers:{"API-KEY":"008538ca-ec18-4d06-8a91-fc8fa3eda943"}}).then(response => {
                        //     if (response.data.resultCode === 0) {
                        //         props.follow(props.user.id) 
                        //     }
                        // });
                        props.follow(props.user.id);

                    }
                    }>FOLLOW</button>
                }
            </div>
        </div>

    );
}

export default User;
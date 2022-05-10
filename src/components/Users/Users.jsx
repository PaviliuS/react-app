import stl from './Users.module.scss';
import React from 'react';
import User from './User/User';
import Pagination from './Pagination/Pagination';
import Preloader from '../Preloader/Preloader';

const Users = (props) => {
 
    let getUsersElements = () => {
        if (props.isFetching === false) {
            return props.users.map(element => { return <User key={`user${element.id}`} user={element} follow={props.follow} unfollow={props.unfollow} isFollowing={props.isFollowing}></User>; })
        }
        else {
            return <Preloader></Preloader>
        }
    };
    
    return (
        <div className={stl.users}>
            <div className={stl.users__content}>
                <div className={stl.users__users}>
                    {getUsersElements()}
                </div>
                <div className={stl.users__pagination}>
                    <Pagination totalUsersCount={props.totalUsersCount}   currentPage={props.currentPage} pageSize={props.pageSize} onPageChange={props.onPageChange}></Pagination>
                </div>
            </div>
        </div>
    );
}

export default Users;
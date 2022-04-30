import stl from './Users.module.scss';
import React from 'react';
import User from './User/User';
import * as axios from 'axios';

const Users = (props) => {

    if(props.users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger;
            props.setUsers(response.data.items);
        })
        
        // props.setUsers(
        //     [
        //         { id: '1', followed: false, name: 'Михаил Максименко', status: 'Hello', location: {country: '', city: ''} },
        //         { id: '2', followed: true, name: 'Михаил Максименко', status: 'Hello', location: {country: '', city: ''} },
        //         { id: '3', followed: true, name: 'Михаил Максименко', status: 'Hello', location: {country: '', city: ''} },
        //         { id: '4', followed: true, name: 'Михаил Максименко', status: 'Hello', location: {country: '', city: ''} },
        //         { id: '5', followed: true, name: 'Михаил Максименко', status: 'Hello', location: {country: '', city: ''} },
        //         { id: '6', followed: true, name: 'Михаил Максименко', status: 'Hello', location: {country: '', city: ''} },
        //     ]
        // );
    }

    let usersElements = props.users.map(element => {
        return <User user={element} follow={props.follow} unfollow={props.unfollow}></User>;
    });

    return (
        <div className={stl.users}>
            <div className={stl.users__content}>
                <div className={stl.users__users}>
                    {usersElements}
                </div>
            </div>
        </div>
    );
}

export default Users;
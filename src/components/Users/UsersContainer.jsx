import UsersClass from './UsersClass';
import {followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setIsFetchingActionCreator, setIsFollowingActionCreator, getUsersThunkCreator, followThunkCreator, unfollowThunkCreator} from '../../redux/users-reducer';
import { connect } from 'react-redux';
import * as axios from 'axios';
import React from 'react';
import { usersAPI } from '../../api/api';

class UsersContainerAPI extends React.Component {

    componentDidMount() {
        // this.props.setIsFetching(true);
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{withCredentials: true}).then(response => {
        // //     this.props.setUsers(response.data.items);
        // //     this.props.setTotalUsersCount(100);
        // //     this.props.setIsFetching(false);
        // // })
        // usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(100);
        //     this.props.setIsFetching(false);
        // })
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }

    onPageChange(currentPage, pageSize){
        this.props.setCurrentPage(currentPage);
        this.props.getUsersThunk(currentPage, pageSize);
        // this.props.setIsFetching(true);
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,{withCredentials: true}).then(response => {
        // //     this.props.setUsers(response.data.items);
        // //     this.props.setIsFetching(false);
        // // })
        // usersAPI.getUsers(currentPage,pageSize).then(data => {
        //     this.props.setUsers(data.items);
        //     this.props.setIsFetching(false);
        // })
    }
    follow(userId){
        // this.props.setIsFollowing(true, userId)
        // usersAPI.follow(userId).then(data => {
        //     if (data.resultCode === 0) {
        //         this.props.follow(userId) 
        //     }
        //     this.props.setIsFollowing(false, userId)
        // });
        this.props.followThunk(userId);
    }
    unfollow(userId){
        // this.props.setIsFollowing(true, userId)
        // usersAPI.unfollow(userId).then(data => {
        //     if (data.resultCode === 0) {
        //         this.props.unfollow(userId) 
        //     }
        //     this.props.setIsFollowing(false, userId)
        // });
        this.props.unfollowThunk(userId);
    }
  

 
    render() {
        return (
            <UsersClass 
                users={this.props.users} 
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount} 
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange.bind(this)}
                follow={this.follow.bind(this)}
                unfollow={this.unfollow.bind(this)}
                isFetching={this.props.isFetching}
                setIsFetching={this.props.setIsFetching}
                isFollowing={this.props.isFollowing}
            >               
            </UsersClass>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followActionCreator(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowActionCreator(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage));
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountActionCreator(totalUsersCount));
        },
        setIsFetching: (isFetching) => {
            dispatch(setIsFetchingActionCreator(isFetching));
        },
        setIsFollowing: (isFollowing, userId) => {
            dispatch(setIsFollowingActionCreator(isFollowing, userId));
        },
        getUsersThunk: (currentPage, pageSize) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize));
        },
        followThunk: (userId) => {
            dispatch(followThunkCreator(userId));
        },
        unfollowThunk: (userId) => {
            dispatch(unfollowThunkCreator(userId));
        },
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI);

export default UsersContainer;
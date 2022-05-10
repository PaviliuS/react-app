import Users from './Users';
import {followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator,setCurrentBlockActionCreator, setTotalUsersCountActionCreator, setIsFetchingActionCreator, setIsFollowingActionCreator, getUsersThunkCreator, followThunkCreator, unfollowThunkCreator} from '../../redux/users-reducer';
import { connect } from 'react-redux';
import React from 'react';
import { getUsersSelector, getPageSizeSelector, getTotalUsersCountSelector, getCurrentPageSelector, getIsFetchingSelector,getIsFollowingSelector} from '../../redux/users-selectors';

class UsersContainerAPI extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);  

    }

    onPageChange(currentPage, pageSize){
        this.props.setCurrentPage(currentPage);
        this.props.getUsersThunk(currentPage, pageSize);
    }
    follow(userId){
        this.props.followThunk(userId);
    }
    unfollow(userId){
        this.props.unfollowThunk(userId);
    }
  
    render() {
        return (
            <Users
                users={this.props.users} 
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount} 
                currentPage={this.props.currentPage}
                // currentBlock={this.props.currentBlock}
                // pages={this.props.pages}
                onPageChange={this.onPageChange.bind(this)}
                // setCurrentBlock={this.props.setCurrentBlock}
                follow={this.follow.bind(this)}
                unfollow={this.unfollow.bind(this)}
                isFetching={this.props.isFetching}
                setIsFetching={this.props.setIsFetching}
                isFollowing={this.props.isFollowing}
            >               
            </Users>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        // currentBlock: state.usersPage.currentBlock,
        // pages: state.usersPage.pages,
        isFetching: getIsFetchingSelector(state),
        isFollowing: getIsFollowingSelector(state)
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
        // setCurrentBlock: (currentBlock) => {
        //     dispatch(setCurrentBlockActionCreator(currentBlock));
        // },
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
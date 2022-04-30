import stl from './Users.module.scss';
import React from 'react';
import User from './User/User';
import Pagination from './Pagination/Pagination';
import Preloader from '../Preloader/Preloader';

class UsersClass extends React.Component {

    // componentDidMount() {
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
    //         this.props.setUsers(response.data.items);
    //         this.props.setTotalUsersCount(100);
    //     })
    // }

    getUsersElements() {
        if (this.props.isFetching === false) {
            return this.props.users.map(element => { return <User user={element} follow={this.props.follow} unfollow={this.props.unfollow} isFollowing={this.props.isFollowing}></User>; })
        } 
        else {
            return <Preloader></Preloader>
        }
    }

    // onPageChange(currentPage, pageSize){
    //    // debugger
    //     this.props.setCurrentPage(currentPage);
    //     //debugger
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`).then(response => {
    //         this.props.setUsers(response.data.items);
    //     })
    // }

    render() {
        return (
            <div className={stl.users}>
                <div className={stl.users__content}>
                    <div className={stl.users__users}>
                        {this.getUsersElements()}
                    </div>
                    <div className={stl.users__pagination}>
                        <Pagination totalUsersCount={this.props.totalUsersCount} currentPage={this.props.currentPage} pageSize={this.props.pageSize} onPageChange={this.props.onPageChange}></Pagination>
                    </div>
                </div>
            </div>
        );
    }
}

export default UsersClass;
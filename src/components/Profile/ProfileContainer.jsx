import Profile from './Profile';
import { addPostActionCreator, setProfileActionCreator, updatePostTextActionCreator, getProfileThunkCrator, getStatusThunkCrator, updateStatusThunkCrator } from '../../redux/profile-reducer'
import { connect } from 'react-redux';
import React from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";
import {profileAPI} from '../../api/api';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

// Пример кода до реализации react-redux
// const ProfileContainer = (props) => {

//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     };

//     let onPostChange = (newPostText) => {
//         props.store.dispatch(updatePostTextActionCreator(newPostText));
//     };

//     return (
//         <Profile addPost={addPost} onPostChange={onPostChange} state={props.store.getState()}></Profile>
//     );
// }




class ProfileContainerAPI extends React.Component{
    
    componentDidMount() {     
        this.props.getProfileThunk(this.props.params.userId);
        this.props.getStatusThunk(this.props.params.userId);
       
    }

    render(){   
        return <Profile {...this.props}></Profile>
    }
}
let ProfileContainerRouterData = (props) => {
    let params = useParams();
    console.log(props);

    return <ProfileContainerAPI {...props} params={params}></ProfileContainerAPI>
}

// let AuthRedirectComponent = () => {
//     return withAuthRedirect(ProfileContainerRouterData);
// }

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        onPostChange: (newPostText) => {
            dispatch(updatePostTextActionCreator(newPostText))
        },
        setProfile:(profile)=>{
            dispatch(setProfileActionCreator(profile))
        },
        getProfileThunk:(userId)=>{
            dispatch(getProfileThunkCrator(userId));
        },
        getStatusThunk:(userId)=>{
            dispatch(getStatusThunkCrator(userId));
        },
        updateStatusThunk:(status)=>{
            dispatch(updateStatusThunkCrator(status));
        }
    }
};
//const AuthRedirectComponent = withAuthRedirect(ProfileContainerRouterData);
//const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

const ProfileContainer = () =>{

};

const ProfileContainerCompose = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(ProfileContainerRouterData);

export default ProfileContainerCompose;
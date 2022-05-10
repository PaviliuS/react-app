import Profile from './Profile';
import { addPostActionCreator, getProfileThunkCrator, getStatusThunkCrator, updateStatusThunkCrator } from '../../redux/profile-reducer'
import { connect } from 'react-redux';
import React from 'react';
import { useParams } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { useEffect } from 'react';

const ProfileContainer = (props) => {
    let params = useParams();

    useEffect(() => {
        props.getProfileThunk(params.userId);
        props.getStatusThunk(params.userId);
    }, []);

    return <Profile {...props}></Profile>
}

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => {
            dispatch(addPostActionCreator(post))
        },
        getProfileThunk: (userId) => {
            dispatch(getProfileThunkCrator(userId));
        },
        getStatusThunk: (userId) => {
            dispatch(getStatusThunkCrator(userId));
        },
        updateStatusThunk: (status) => {
            dispatch(updateStatusThunkCrator(status));
        }
    }
};

export default
    compose(
        connect(mapStateToProps, mapDispatchToProps),
        withAuthRedirect,
    )(ProfileContainer);
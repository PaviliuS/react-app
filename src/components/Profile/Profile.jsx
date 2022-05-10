import PostForm from './PostForm/PostForm';
import Post from './Post/Post';
import React from 'react';
import stl from './Profile.module.scss'
import Preloader from '../Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const Profile = (props) => {
    let postsElements = props.posts.map(element => { return <Post key={`post${element.id}`} id={element.id} name={element.name} text={element.text}></Post>; })

    if (props.profile === null) {
        return <Preloader></Preloader>
    }
    else {
        return (
            <div className={stl.profile} >
                <div className={stl.profile__content}>

                    <div className={stl.profile__profileDIV}>
                        <div className={stl.profile__profile}>
                            <div className={stl.profile__image}>
                                <img src={props.profile.photos.large || 'https://cdn-icons-png.flaticon.com/512/56/56745.png'} alt='profilePhoto'></img>
                            </div>
                            <div className={stl.profile__name}>
                                {props.profile.fullName}
                            </div>
                            <div className={stl.profile__about}>
                                {props.profile.aboutMe}
                            </div>
                            <div className={stl.profile__online}>
                                {props.profile.aboutMe}
                            </div>

                        </div>
                    </div>

                    <div className={stl.profile__dataDIV}>
                        <div className={stl.profile__data}>
                            <ProfileStatus status={props.status} updateStatusThunk={props.updateStatusThunk} />
                        </div>

                        <div className={stl.profile__posts}>
                            {postsElements}
                        </div>
                        <PostForm onPostChange={props.onPostChange} addPost={props.addPost}></PostForm>
                    </div>
                </div>
            </div>
        );
    }
};

export default Profile;
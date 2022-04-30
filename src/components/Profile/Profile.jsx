import PostForm from './PostForm/PostForm';
import Post from './Post/Post';
import React from 'react';
import stl from './Profile.module.scss'
import Preloader from '../Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';


class Profile extends React.Component {

    postsElements() {
        return this.props.posts.map(element => { return <Post id={element.id} name={element.name} text={element.text}></Post>; })
    }

    render() {
        if (this.props.profile === null) {
            return <Preloader></Preloader>
        }
        else {
            return (
                <div className={stl.profile} >
                    <div className={stl.profile__content}>

                        <div className={stl.profile__profileDIV}>
                            <div className={stl.profile__profile}>
                                <div className={stl.profile__image}>
                                    <img src={this.props.profile.photos.large}></img>
                                </div>
                                <div className={stl.profile__name}>
                                    {this.props.profile.fullName}
                                </div>
                                <div className={stl.profile__about}>
                                    {this.props.profile.aboutMe}
                                </div>
                                <div className={stl.profile__online}>
                                    {this.props.profile.aboutMe}
                                </div>

                            </div>
                        </div>

                        <div className={stl.profile__dataDIV}>
                            <div className={stl.profile__data}>
                                <ProfileStatus status={this.props.status} updateStatusThunk={this.props.updateStatusThunk}/>
                            </div>

                            <div className={stl.profile__posts}>
                                {this.postsElements()}
                            </div>
                            <PostForm newPostText={this.props.newPostText} onPostChange={this.props.onPostChange} addPost={this.props.addPost}></PostForm>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Profile;
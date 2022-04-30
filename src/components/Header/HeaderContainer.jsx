import React from "react";
import Header from "./Header";
import * as axios from 'axios';
import { connect } from "react-redux";
import { setAuthUserDataActionCreator, setAuthUserDataThunkCreator } from "../../redux/auth-reducer";
import { authAPI } from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then(response => {
        //     if(response.data.resultCode === 0){
        //         let {id, email, login} = response.data.data;
        //         this.props.setAuthUserData(id, email, login)
        //         console.log(response.data.data);

        //     }

        // })
        // authAPI.auth().then(data => {
        //     if (data.resultCode === 0) {
        //         let { id, email, login } = data.data;
        //         this.props.setAuthUserData(id, email, login)
        //     }
        // })

        this.props.setAuthUserDataThunk();
    }

    render() {
        return <Header logo={this.props.logo} userId={this.props.userId} email={this.props.email} login={this.props.login}></Header>
    }
}
const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        setAuthUserData: (userId, email, login) => {
            dispatch(setAuthUserDataActionCreator(userId, email, login));
        },
        setAuthUserDataThunk:()=>{
            dispatch(setAuthUserDataThunkCreator());
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
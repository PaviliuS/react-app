import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component) =>{
    class RedirectComponent extends React.Component{
        render() {
            // if (this.props.isAuth === false) {
            //     return <Navigate to='/login'></Navigate>
            // }
            // else{
                return <Component {...this.props}></Component>
            // }
        }
    }
    
    let ConnectedAuthRedirect = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirect;
}
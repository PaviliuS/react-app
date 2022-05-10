import React from "react";
import Header from "./Header";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
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

export default connect(mapStateToProps, null)(HeaderContainer);
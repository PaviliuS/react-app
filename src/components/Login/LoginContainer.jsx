import Login from "./Login";
import { connect } from 'react-redux';
import { LoginThunkCreator } from "../../redux/auth-reducer";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        loginThunk: (login, password, rememberMe) => {
            dispatch(LoginThunkCreator(login, password, rememberMe));
        }
  
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
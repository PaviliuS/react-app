import React from 'react';
import stl from './Login.module.scss';
import { Form, Field } from 'react-final-form';
import { CheckBox, Input } from '../common/FormsControls/FormsControls';
import { composeValidators, required, maxLengthCreator } from '../../utils/validators/validators';
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
    let onSubmit = (values) => {
        props.loginThunk(values.login, values.password, values.rememberMe);
    }

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <form className={stl.loginForm} onSubmit={handleSubmit}>
                    <div>
                        <Field validate={composeValidators(required, maxLengthCreator(30))} name="login" placeholder='Login' stl={stl} component={Input} />
                    </div>
                    <div>
                        <Field validate={composeValidators(required, maxLengthCreator(30))} name="password" placeholder='Password' stl={stl} component={Input} type='password' />
                    </div>
                    <div>
                        <Field name="rememberMe" component={CheckBox} type="checkbox" stl={stl} />
                    </div>
                    <button> Логин </button>
                </form>
            )}
        />

    );
}

const Login = (props) => {
    if (props.isAuth === true) {
        return <Navigate to={`/profile/${props.userId}`}></Navigate>
    }
    else {
        return (
            <div className={stl.login}>
                <div className={stl.login__container}>
                    <div className={stl.login__title}>Вы не авторизованы!</div>
                    <LoginForm {...props} ></LoginForm>
                </div>
            </div>
        );
    }
}

export default Login
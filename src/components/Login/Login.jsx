import React from 'react';
import stl from './Login.module.scss';

const Login = (props) => {

    return (
        <div className={stl.login}>
            <div className={stl.login__container}>
                <div className={stl.login__title}>Вы не авторизованы!</div>
            </div>
        </div>
    );
}

export default Login
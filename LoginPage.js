import React from 'react';
import LoginForm from '../LoginForm';

const LoginPage = ({ onLogin }) => {
    return (
        <div className="container mt-5">
            <LoginForm onLogin={onLogin} />
        </div>
    );
};

export default LoginPage;

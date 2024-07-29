import React from 'react';
import RegistrationForm from '../RegistrationForm';

const RegistrationPage = ({ onRegister }) => {
    return (
        <div className="container mt-5">
            <RegistrationForm onRegister={onRegister} />
        </div>
    );
};

export default RegistrationPage;

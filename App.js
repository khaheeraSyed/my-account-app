import React, { useState } from 'react';
import LoginPage from './src/LoginPage';
import RegistrationPage from './src/RegistrationPage';
import AccountPage from './src/AccountPage';
import { registerUser, loginUser, updateUser } from './src/api';

const App = () => {
    const [user, setUser] = useState(null);

    const handleLogin = (credentials) => {
        const loggedInUser = loginUser(credentials);
        if (loggedInUser) {
            setUser(loggedInUser);
        } else {
            alert('Invalid credentials');
        }
    };

    const handleRegister = (newUser) => {
        registerUser(newUser);
        alert('Registration successful! You can now log in.');
    };

    const handleUpdate = (updatedUser) => {
        updateUser({ ...user, ...updatedUser });
        setUser({ ...user, ...updatedUser });
        alert('Account updated successfully!');
    };

    
};

export default App;


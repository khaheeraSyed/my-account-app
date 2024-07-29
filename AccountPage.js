import React from 'react';
import AccountDetails from './AccountDetails';

const accountPage = ({ user, onUpdate }) => {
    return (
        <div className="container mt-5">
            <AccountDetails user={user} onUpdate={onUpdate} />
        </div>
    );
};

export default AccountPage;

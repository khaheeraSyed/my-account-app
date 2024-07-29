import React, { useState } from 'react';

const AccountDetails = ({ user, onUpdate }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate({ name, email });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Account Details</h2>
            <div className="mb-3">
                <label>Name:</label>
                <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label>Email:</label>
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
    );
};

export default AccountDetails;

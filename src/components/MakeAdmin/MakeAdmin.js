import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    };

    const handleAdminSubmit = e => {
        e.preventDefault();
        // console.log('clicked');
        console.log(email);
        const user = { email };
        fetch('https://gentle-citadel-90786.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    alert('Make an admin successfully');
                }

                console.log(data);
            });
    };

    return (
        <div className="text-center">
            <h1>Please, Make an Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <input
                    className="p-2"
                    placeholder="Admin Email"
                    onBlur={handleOnBlur}
                    type="email"
                    name="email"
                    id="email"
                />
                <input className="p-2" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default MakeAdmin;

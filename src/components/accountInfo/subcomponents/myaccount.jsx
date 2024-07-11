// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import "../../../css/myaccount/myaccount.css";
import Edit from '.././subcomponents/edit';

const AccountOverview = () => {
    const [editing, setEditing] = useState(false);
    const [fullName, setFullName] = useState(''); // State for full name
    const [email, setEmail] = useState(''); // State for email
    const [password, setPassword] = useState('********'); // Placeholder for password
    const [location, setLocation] = useState(''); // State for location

    useEffect(() => {
        // Fetch user profile details when component mounts
        fetchUserProfile();
    }, []);

    const fetchUserProfile = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://127.0.0.1:5000/profile/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setFullName(data.full_name);
                setEmail(data.email);
                setLocation(data.location); // Assuming endpoint returns location
                // Assuming the endpoint returns password, update password state if needed
                setPassword('********'); // Placeholder for password
            } else {
                console.error('Failed to fetch user profile:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleCancelEdit = () => {
        setEditing(false);
        fetchUserProfile(); // Reload user profile on cancel
    };

    if (editing) {
        return <Edit onCancel={handleCancelEdit} />;
    }

    const handleUpdateProfile = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://127.0.0.1:5000/profile/update', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    full_name: fullName,
                    email: email,
                    location: location,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Profile updated successfully:', data.message);
                setEditing(false);
                // Optionally, update state or handle success message
            } else {
                console.error('Failed to update profile:', response.statusText);
                // Handle error response
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            // Handle fetch or network error
        }
    };

    return (
        <section className="sect">
            <div className="card">
                <header className="header">
                    <h1 className="ac-over">Account Overview</h1>
                    <button className="btn-pen" aria-label="Edit Address" onClick={handleEditClick}>
                        Update
                    </button>
                </header>
                <div className="row">
                    <div className="col">
                        <article className="card-blw">
                            <header className="hdr">
                                <h2 className="head1">Account details</h2>
                            </header>
                            <div className="fig1">
                                Name:
                                <p className="nam-user">{fullName}</p>
                                Email:
                                <p className="email-pass-user">{email}</p>
                                Password:
                                <p className="email-pass-user">{password}</p>
                            </div>
                        </article>
                    </div>
                    <div className="col">
                        <article className="card-blw">
                            <header className="hdr">
                                <h2 className="head1">Shipping Details</h2>
                            </header>
                            <div className="pv">
                                <div className="join">
                                    <svg className="ic-loc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                    </svg>
                                    <p className="def">Your shipping address:</p>
                                </div>
                                <address className="address">
                                    <p>{location}</p>
                                </address>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AccountOverview;

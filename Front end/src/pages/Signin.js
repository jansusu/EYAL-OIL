import React, { useState } from 'react';
import { register } from './Auth';
import './signin.css'

const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(username, password);
            setSuccess('Registration successful! You can now log in.');
            setError('');
            setUsername('');
            setPassword('');
        } catch (err) {
            console.error('Registration error:', err);
            setError('Registration failed');
            setSuccess('');
        }
    };

    return (
        <div className='card si'>
            <h5>Registration form</h5>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div><br/>
            <button className="btn btn-dark" type="submit">Register</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </form>
        </div>
    );
};

export default Signin;


import React, { useState } from 'react';
import { login} from './Auth';
import './signin.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);

        try {
            const token = await login(username, password);
            console.log('Login successful, token:', token);
            alert('Login successful');
            setError('');
        } catch (err) {
            console.error('Login error:', err);
            setError('Login failed');
        }
    };

    return (
        <div className='card si'>
            <h5>Login Form</h5>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div><br/>
            <button className='btn btn-dark' type="submit">Login</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
        </div>
    );
};

export default Login;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link
import '../styles/login.scss';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:5000/api/login', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            if (!response.ok) {
                throw new Error('Login failed');
            }
            
            navigate('/books');
        } catch (error) {
            console.error('Login error:', error);
            
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="name" placeholder="Username" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Password" required />
                <button type="submit" className="login-btn">Login</button>
            </form>
            <p>New user! <Link to="/register">Sign up</Link></p> {}
        </div>
    );
}

export default Login;



    




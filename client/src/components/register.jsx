import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/register.scss';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            if (!response.ok) {
                throw new Error('Registration failed');
            }
            
            navigate('/'); 
        } catch (error) {
            console.error('Registration error:', error);
            
        }
    };

    return (
        <div className="register-container">
            <h2 className="register-heading">Register</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="register-input-text" placeholder="Username" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="register-input" placeholder="Password" required />
                <button type="submit" className="register-btn">Register</button>
            </form>
            <p>Already a user! <Link to="/">Sign in</Link></p> {}
        </div>
    );
}

export default Register;






import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/token/generate-token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(function(response) {
        if (response.status === 500){
            alert("Niepoprawny login lub hasło ")
            return response.json();
        }else
            return response.json();
    })
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        localStorage.setItem('username', username)
        e.preventDefault();
        // console.log("Username: " + username);
        // console.log("Password: " + password);
        try {
            const token = await loginUser({
                username,
                password
            });
            setToken(token);          
        } catch (e) {
            
        }

            

    }

    return(
        <div className="login-wrapper">
            <h1>Panel logowania</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Nazwa użytkownika</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Hasło</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};
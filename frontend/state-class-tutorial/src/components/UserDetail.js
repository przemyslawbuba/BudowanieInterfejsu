import React, { Component } from "react";
import useToken from "./App/useToken";

class UserDetail extends Component {
    render() {
        return (
            <div>
                <h2>Dane użytkownika</h2>
            </div>
        );
    }
}
async function loginUser() {
    return fetch('http://localhost:8080/users', {
        method: 'GET',
        withCredentials: true,
        headers: {
            'Authorization': localStorage.getItem('token'),
            'Content-Type': 'application/json'
        }
    })
        .then(data => data.json())
}



export default UserDetail;
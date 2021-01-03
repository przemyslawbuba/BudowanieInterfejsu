import { useState } from 'react';
import axios from "axios";

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
         localStorage.setItem('token', JSON.stringify(userToken));
         const str = JSON.stringify(userToken);
         const obj = JSON.parse(str)
         localStorage.setItem('tokenKey', obj.token);
        // localStorage.setItem('role', obj.role)
        getRole()
       setToken(userToken.token);
    };

    return {
        setToken: saveToken,
        token
    }
    function getRole() {
        const context = this;
        axios.get('http://localhost:8080/users/getRole/' + localStorage.getItem('username'), {
            headers: {
                Authorization: localStorage.getItem('tokenKey'),
            }
        }).then(function (response) {
            localStorage.setItem('role', response.data)
        }).catch(function () {
            alert('An unexpected error occurred, check browser logs for details');
        });
    }

}
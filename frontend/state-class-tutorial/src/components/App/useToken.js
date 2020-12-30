import { useState } from 'react';

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
       setToken(userToken.token);
    };

    return {
        setToken: saveToken,
        token
    }
}
import React, { useState, Component } from 'react';
import { FaHome } from 'react-icons/fa';
import {
    Route,
    NavLink,
    HashRouter,
} from 'react-router-dom';
import './App.css';
import Login from '../Login/Login';
import useToken from './useToken';
import Home from "../Home";
import Offer from "../Offer";
import Contact from "../Contact";
import AddOffer from "../AddOffer";
import { Button } from 'react-bootstrap';

function App() {

    const { token, setToken } = useToken();

    if(!token) {
        return <Login setToken={setToken} />
    }

    return (
        <HashRouter>
            <div>
                <h1 > <FaHome/>Nieruchomości</h1>
                <ul className="header">
                    <li ><NavLink exact to="/">Strona domowa </NavLink></li>
                    <li><NavLink to="/offer">Oferty</NavLink></li>
                    <li><NavLink to="/contact">Kontakt</NavLink></li>
                    <li><NavLink to="/addOffer"><p hidden={!isAdmin()}>Dodawanie oferty</p></NavLink></li>
                    <li><button onClick={logout}>Logout {getUsername()}</button></li>
                    {/*<li><input value={getUsername()} readOnly={true} style={{width: "70px" }}></input></li>*/}
                </ul>
                <div className="content">
                    <Route exact to path="/" component={Home}/>
                    <Route path="/offer" component={Offer}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/addOffer" component={AddOffer}/>
                </div>
            </div>
        </HashRouter>
    );

}
function logout() {
    localStorage.clear();
    window.location.href = '/';
}
function getUsername(){
    return localStorage.getItem('username')
}
function isAdmin() {
    if (localStorage.getItem('role') === 'ROLE_ADMIN'){
        return true;
    }else {
        return false;
    }
}

export default App;
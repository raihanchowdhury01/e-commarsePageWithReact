import React from 'react';
import './Header.css';
import logo from '../../../images/Logo.svg';
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='manuBar'>
                <a href="/shop">shop</a>
                <a href="/order">orders</a>
                <a href="/inventory">invantory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;
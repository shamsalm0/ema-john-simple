import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg';
const Header = () => {
    return (
        <div>
            <nav className='nav-bar'>
             <img src={logo} alt="" />
             <div>
             <a href="/home">Home</a><a href="/order">Order</a><a href="/inventory">Inventory</a><a href="/about">About</a>
             </div>
            </nav>
        </div>
    );
};

export default Header;
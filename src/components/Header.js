import React from 'react';
import logo from '../images/MEGAKHEIR-Logo 1.svg';
import profileImage from '../images/Vector.svg';

const Header = () => (
    <header className="header">
        <div id="profileImage">
            <div><img src={profileImage} alt="profileImage" /></div>
        </div>
        <div>
            <img src={logo} alt="logo" />
        </div>
    </header>
);

export default Header;
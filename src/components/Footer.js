import React from 'react';
import powered from '../images/Powered-by.svg';
import facebook from '../images/Facebook.svg';
import instagram from '../images/instagram.svg';

const Footer = () => (
    <footer className="footer">
        <img src={powered} alt="Powered-by"/>
        <div className="icon">
            <a href="https://www.facebook.com/TAtelecom/" rel="noopener noreferrer" target="_blank">
                <img src={facebook} alt="Facebook"/>
            </a>
            <a href="https://www.instagram.com/tatelecom/" rel="noopener noreferrer" target="_blank">
                <img src={instagram} alt="instagram"/>
            </a>
        </div>

    </footer>
);

export default Footer;
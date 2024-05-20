import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="copyright">&copy; 2023 Copywrite. All rights reserved by QodeMatrix</p>
            <p className="support">Documentation   <span style={{ marginLeft: '15px' }}>Support</span>  </p>
        </footer>
    );
};

export default Footer;

import React from 'react';
// import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2024 Pet Adoption. All rights reserved.</p>
            <div className="footer-links">
                <a href="/contact">Contact Us</a> | 
                <a href="/privacy">Privacy Policy</a> | 
                <a href="/terms">Terms of Service</a>
            </div>
        </footer>
    );
};

export default Footer;

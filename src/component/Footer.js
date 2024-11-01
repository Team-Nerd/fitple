import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className = "footer">
            <div className = "intro">
                <span>웹소개</span>
            </div>
            <div className = "seperate-bar3">
                <span>|</span>
            </div>
            <div className = "contact">
                <span>고객문의</span>
            </div>
            <div className = "seperate-bar4">
                <span>|</span>
            </div>
            <div className = "terms-of-use">
                <span>이용약관</span>
            </div>
        </footer>
    );
}

export default Footer;
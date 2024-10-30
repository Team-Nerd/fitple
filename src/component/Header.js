import React from "react";
import "./Header.css";

function Header() {
    return(
        <header className = "header">
            <img className = "header-title" src = '/title.png' alt = 'Title image'></img>
            <div className = "header-subtitle">
                <span>여러분들을 위한 전공 커뮤니티, 웹이름</span>
            </div>
            <div className = "header-login">
                <span>로그인</span>
            </div>
            <div className = "seperate-bar1">
                <span>|</span>
            </div>
            <div className = "header-register">
                <span>회원가입</span>
            </div>
            <div className = "seperate-bar2">
                <span>|</span>
            </div>
            <div className = "header-mypage">
                <span>마이페이지</span>
            </div>
            <div className = "category-border"></div>
        </header>  
    );
}

export default Header;
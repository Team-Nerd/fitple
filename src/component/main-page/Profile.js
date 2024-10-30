import React from 'react';
import './Profile.css';

function Profile(){
    return (
        <div className = "Profile">
            <div className = "profile-box"></div>
            <img className = "profile-image" src = '/profileImage.png' alt = 'Profile Icon'></img>
            <div className = "profile-introbox"></div>
            <div className = "profile-intro-seperate-bar">자기소개</div>
            <div className = "profile-intro-text">안녕하세요. 저는 인하대학교 인공지능공학과 김인하 입니다. 현재 복수전공 준비 중에 있습니다. 복수전공 고민하는 분들 같이 얘기 나눠요</div>
            <div className = "profile-my-point-text">MY POINT</div>
            <img className = "profile-point-icon" src = "/point_icon.png" alt = "point_icon"></img>
            <div className = "profile-point-box">5000</div>
            <div className = "profile-point-charge-btn">충전</div>
        </div>
    );
}


export default Profile;
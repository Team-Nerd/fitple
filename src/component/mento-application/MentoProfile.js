import React from 'react';
import './MentoProfile.css';

function Profile() {
    return (
        <div className="Profile">
            <div className="mentoa-profile-box"></div>
            <img className="mentoa-profile-image" src="/profileImage.png" alt="Profile Icon" />
            <div className="mentoa-profile-introbox"></div>
            <div className="mentoa-profile-intro-seperate-bar">자기소개</div>
            <div className="mentoa-profile-intro-text">
                안녕하세요. 저는 인하대학교 인공지능공학과 김인하 입니다. 현재 복수전공 준비 중에 있습니다. 복수전공 고민하는 분들 같이 얘기 나눠요
            </div>
        </div>
    );
}

export default Profile;

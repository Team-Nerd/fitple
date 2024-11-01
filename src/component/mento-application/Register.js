import React from 'react';
import './Register.css';
import Profile from '../main-page/Profile'

function MentoApplication () {
    return (
        <div className = "mento-application">
            <div className = "mento-application-title">멘토 신청</div>
            <div className = "mento-application-university">대학 정보</div>
            <div className = "mento-application-major">학과</div>
            <div className = "mento-application-grade">학년</div>
            <div className = "mento-application-enrollment">재학 상태</div>
            <div className = "mento-application-submit">재학증명서/졸업증명서 제출</div>
            <div className = "mento-application-file-upload"></div>
        </div>
    );
}

export default MentoApplication;

import React from 'react';
import './ProfileBox.css';

function ProfileBox({ name, age, university }) {
    // 이름이 '김인하'인 경우 다른 이미지를 설정
    const profileImageSrc = name === '김인하' ? '/profileImage.png' : '/default-profile.png';

    return (
        <div className="mento-profile-box">
            <img src={profileImageSrc} alt="Profile" className="mento-profile-img" />
            <div className="mento-profile-info">
                <div className="mento-profile-info-row">
                    <div className="mento-profile-name">이름: {name}</div>
                    <div className="mento-profile-age">성별/나이: {age}</div>
                </div>
                <div className="mento-profile-university">{university}</div>
                <div className="mento-profile-tags-row">
                    <button className="mento-profile-tag1">#태그1</button>
                    <button className="mento-profile-tag2">#태그2</button>
                    <div className="mento-profile-tags-2nd-row">
                        <button className="mento-profile-tag3">#태그3</button>
                        <button className="mento-profile-tag-add">+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileBox;

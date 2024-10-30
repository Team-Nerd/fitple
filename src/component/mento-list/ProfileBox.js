import React from 'react';
import './ProfileBox.css';

function ProfileBox({ name, age, university, tags}) {
    return (
        <div className="profile-box">
            <img src="default-profile-image.png" alt="Profile" className="profile-img" />
            <div className="profile-info">
                <div className="profile-info-row">
                    <div className="profile-name">이름: {name}</div>
                    <div className="profile-age">성별/나이: {age}</div>
                </div>
                <div className="profile-university">{university}</div>
                <div className="profile-tags-row">
                    <button className="profile-tag1">#태그1</button>
                    <button className="profile-tag2">#태그2</button>
                <div/>
                <div classNAme="profile-tags-2nd-row">
                    <button className="profile-tag3">#태그3</button>
                    <button className="profile-tag-add">+</button>
                </div>
                    
                </div>
            </div>
        </div>
    );
}

export default ProfileBox;

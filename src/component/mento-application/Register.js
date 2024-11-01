import React from 'react';
import './Register.css';
import Profile from '../main-page/Profile'

function MentoApplication () {
    return (
        <div className = "mento-application">
            <img className = "mento-application-img" src="/mento-apply-img.png"></img>
            <img className = "mento-application-white-box" src="/white-box.png"></img>
            <img className = "mento-application-experience" src="/experience.png"></img>
            <input className='mento-application-university-input' type='text' placeholder='입력하세요'></input>
            <input className='mento-application-major-input' type='text' placeholder='입력하세요'></input>
            <input className='mento-application-grade-input' type='text' placeholder='입력하세요'></input>
            <input className='mento-application-enrollment-input' type='text' placeholder='입력하세요'></input>
            <input className='mento-application-intro-input' type='text' placeholder='입력하세요'></input>
            <input className='mento-application-experience-input' type='text' placeholder='입력하세요'></input>
            <button className='mento-application-upload-button'>업로드</button>
        </div>
    );
}

export default MentoApplication;

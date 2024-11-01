import React from 'react';
import './Mento.css';
import ProfileBox from './ProfileBox';

const mockData = [
    { name: '김인하', age: '남, 25', university: '인하대학교 / 인공지능공학과' },
    { name: '안효규', age: '남, 21', university: '인하대학교 / 인공지능공학과' },
    { name: '장소현', age: '여, 20', university: '인하대학교 / 인공지능공학과' },
    { name: '권용태', age: '남, 20', university: '인하대학교 / 정보통신공학과' },
    { name: '박상준', age: '남, 21', university: '인하대학교 / 인공지능공학과'},
    { name: '우연정', age: '여, 20', university: '인하대학교 / 디자인테크놀로지학과'},
    { name: '임희원', age: '여, 20', university: '인하대학교 / 정보통신공학과'}

    // 더 많은 데이터...
];

function Mento() {
    return (
        <div className="mento-container">
            <div className="mento-list-title">멘토 목록</div>
            <div className="mento-list-category">카테고리</div>
            <div className="mento-profile-container">
                {mockData.map((mentor, index) => (
                    <ProfileBox
                        key={index}
                        name={mentor.name}
                        age={mentor.age}
                        university={mentor.university}
                    />
                ))}
            </div>
        </div>
    );
}

export default Mento;

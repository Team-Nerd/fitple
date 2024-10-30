import React from 'react';
import './Mento.css';
import ProfileBox from './ProfileBox';

const mockData = [
    { name: '김철수', age: '남, 25', university: '서울대학교 / 컴퓨터공학과' },
    { name: '박영희', age: '여, 23', university: '고려대학교 / 경제학과' },
    { name: '이민호', age: '남, 24', university: '연세대학교 / 경영학과' },
    { name: '최수정', age: '여, 22', university: '한양대학교 / 전자공학과' },
    { name: '장소현', age: '여, 20', university: '인하대학교 / 인공지능공학과'},
    { name: '우연정', age: '여, 20', university: '인하대학교 / 디자인테크놀로지학과'}
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

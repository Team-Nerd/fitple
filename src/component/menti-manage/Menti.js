import React from 'react';
import './Menti.css';
import ProfileBox from '../mento-list/ProfileBox';

const mockData = [
    { name: '김철수', age: '남, 25', university: '서울대학교 / 컴퓨터공학과' },
    { name: '박영희', age: '여, 23', university: '고려대학교 / 경제학과' },
    { name: '이민호', age: '남, 24', university: '연세대학교 / 경영학과' },
    { name: '최수정', age: '여, 22', university: '한양대학교 / 전자공학과' },
    { name: '장소현', age: '여, 20', university: '인하대학교 / 인공지능공학과' },
    // 여기에 더 많은 데이터를 추가 가능
];

function Mentimanage() {
    const maxProfilesPerRow = 4; // 한 줄에 배치할 최대 프로필 박스 수
    const profilesToShow = mockData.slice(0, maxProfilesPerRow * 3); // 3줄 이하일 때만 나타낼 프로필 박스
    const showAdditionalBox = mockData.length <= maxProfilesPerRow * 3; // 3줄 이하일 때 추가 버튼 영역 표시 여부

    return (
        <div className="mentimanage-container">
            <div className="mentimanage-title">멘티 관리</div>
            <div className="mentimanage-profile-container">
                {mockData.map((mentee, index) => (
                    <ProfileBox
                        key={index}
                        name={mentee.name}
                        age={mentee.age}
                        university={mentee.university}
                    />
                ))}
                {showAdditionalBox && (
                    <div className="mentimanage-additional">
                        <h2>더 많은 멘티를 만들어보세요!</h2>
                        <button className="mentimanage-button1">멘토 신청자 목록</button>
                        <button className="mentimanage-button2">멘티 늘리기 (마이페이지)</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Mentimanage;

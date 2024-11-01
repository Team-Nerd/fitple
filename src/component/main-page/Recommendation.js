import React from 'react';
import './Recommendation.css';

function Recommendation() {
    return (
        <div className = "recommandation">
            <div className = "recommendation-box"></div>
            <div className = "recommendation-box-seperate-bar">⭐️ 오늘의 추천글 ⭐️</div>
            <div className = "recommendation-explain-best">BEST글</div>
            <div className = "recommendation-explain-number">추천수</div>
            <div className = "recommendation-1st">
                <div className = "recommendation-number-box1">1</div>
                <div className = "recommendation-text1">복수전공 고민하는 사람들 같이 얘기 나눠요</div>
                <div className = "recommendation-recommend-num1">100</div>
            </div>
            <div className = "recommendation-2nd">
                <div className = "recommendation-number-box2">2</div>
                <div className = "recommendation-text2">효과적인 면접 자기소개 예시: 나의 경험을 강조하는 전략 🍀</div>
                <div className = "recommendation-recommend-num2">99</div>
            </div>
            <div className = "recommendation-3rd">
                <div className = "recommendation-number-box3">3</div>
                <div className = "recommendation-text3">경영학과생인데 복수 전공으로 추천해줄만한 과 있나요?</div>
                <div className = "recommendation-recommend-num3">98</div>
            </div>
            <div className = "recommendation-4th">
                <div className = "recommendation-number-box4">4</div>
                <div className = "recommendation-text4">요즘은 복수전공도 주 전공만큼 인정해주는 분위기인가요?</div>
                <div className = "recommendation-recommend-num4">97</div>
            </div>
            <div className = "recommendation-extra">더 많은 글들이 궁금하다면?</div>
            <img className = "recommendation-extra-arrow" src = "/main_arrow.png" alt = "Arrow"></img>
        </div>
    );
}

export default Recommendation;
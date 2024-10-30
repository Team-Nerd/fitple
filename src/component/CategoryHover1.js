import React, { useState } from 'react';
import CategorySubMenu from './CategorySubMenu';  // 서브메뉴 컴포넌트 임포트
import './Category.css';

function CategoryHover1() {
  const [isHovered, setIsHovered] = useState(false);
  const [subMenuHovered, setSubMenuHovered] = useState('');


  const subMenus = {
    '공과대학':[
      { "name": "기계공학과" }, //추후에 연결되는 링크 추가 예정!
      { "name": "산업경영공학과" },
      { "name": "신소재공학과" },
      { "name": "공간정보공학과" },
      { "name": "에너지자원공학과" },
      { "name": "전자공학과" },
      { "name": "미래자동차공학(융합전공)" },
      { "name": "항공우주공학과" },
      { "name": "화학공학과" },
      { "name": "사회인프라공학과" },
      { "name": "건축학부(건축공학)" },
      { "name": "융합기술경영학부" },
      { "name": "정보통신공학과" },
      { "name": "이차전지공학(융합전공)" },
      { "name": "조선해양공학과" },
      { "name": "고분자공학과" },
      { "name": "환경공학과" },
      { "name": "건축학부(건축학)" },
      { "name": "전기공학과" },
      { "name": "반도체시스템공학과" },
      { "name": "반도체공학(융합전공)" }
    ],
    '자연과학대학':[
      { "name": "수학과" },
      { "name": "화학과" },
      { "name": "통계학과" },
      { "name": "해양과학과" },
      { "name": "물리학과" },
      { "name": "식품영양학과" }
    ],    
    '경영대학':[
      { "name": "경영학과" },
      { "name": "국제통상학과" },
      { "name": "글로벌금융학과" },
      { "name": "기후위기대응(융합전공)" },
      { "name": "아태물류학부" }
    ],
    '사범대학':[
      { "name": "국어교육과" },
      { "name": "교육학과" },
      { "name": "영어교육과" },
      { "name": "체육교육과" },
      { "name": "사회교육과" },
      { "name": "수학교육과" }
    ],    
    '사회과학대학':[
      { "name": "행정학과" },
      { "name": "경제학과" },
      { "name": "사회복지학과" },
      { "name": "정치외교학과" },
      { "name": "소비자학과" },
      { "name": "기후위기대응(융합전공)" },
      { "name": "미디어커뮤니케이션학과" },
      { "name": "아동심리학과" }
    ],    
    '문과대학':[
      { "name": "한국어문학과" },
      { "name": "중국학과" },
      { "name": "프랑스언어문화학과" },
      { "name": "사회학과" },
      { "name": "일본언어문화학과" },
      { "name": "문화콘텐츠문화경영학과" },
      { "name": "철학과" },
      { "name": "영어영문학과" }
    ],    
    '의과대학':[
      { name: '의예과'},
      { name: '의학과'}
    ],
    '간호대학':[
      { name: '간호학과'}
    ],
    '예술체육대학':[
      { "name": "조형예술학과" },
      { "name": "연극영화학과" },
      { "name": "디자인융합학과" },
      { "name": "의류디자인학과" },
      { "name": "스포츠과학과" }
    ],    
    '소프트웨어융합대학': [
      { name: '컴퓨터공학과'}, 
      { name: '인공지능공학과'},
      { name: '데이터사이언스학과'},
      { name: '디자인테크놀로지학과'},
      { name: '스마트모빌리티공학과'}
    ],
    '바이오시스템융합학부':[
      { "name": "생명공학과" },
      { "name": "바이오제약공학과" },
      { "name": "생명과학과" }
    ]
  }    

  return (
    <div className="Hover">
      <div 
        className={`HoverText ${isHovered ? 'hovered' : ''}`} 
        onMouseEnter={() => setIsHovered(true)}  
        onMouseLeave={() => {
          setIsHovered(false);
          setSubMenuHovered('');
        }}
        style={{ position: 'absolute', top: '190px', left: '250px', width: '200px', height: '32px' }}
      >
        전공 별 커뮤니티
        {isHovered && (
          <div className="hover-box">
            {['공과대학', '자연과학대학', '경영대학', '사범대학', '사회과학대학', '문과대학', '의과대학', '간호대학', '예술체육대학', '소프트웨어융합대학', '바이오시스템융합학부'].map((menu) => (
              <div 
                key={menu}
                onMouseEnter={() => setSubMenuHovered(menu)}  
                onMouseLeave={() => setSubMenuHovered('')}   
                className="menu-item"
                style={{ position: 'relative' }}
              >
                {menu} <span className="arrow">›</span>

                <CategorySubMenu 
                  subMenus={subMenus[menu]} 
                  isVisible={subMenuHovered === menu} 
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryHover1;

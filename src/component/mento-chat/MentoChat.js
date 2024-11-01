import React from 'react';
import './MentoChat.css'
import Category from '../Category';


function MentoChat() {
    return (
        <div className = "mentochat">
            <Category />
            <div className = "mentochat-title">멘토와의 채팅</div>
            <div className = "chatbox"></div>
            <div className = "chat-enter-box">메시지 입력</div>
            <div className = "enter-box">전송</div>
        </div>
    );
}
export default MentoChat;
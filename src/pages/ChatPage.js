import React from 'react';

import '../styles/ChatPage.css';

export function ChatPage() {
  return (
    <div className='chat-page'>
      <h1 className='page-title'>Диалог</h1>

      <div className='chat-view' id='chat'>
        <div className='message'>
          <div className='message-author'>Чат</div>
          <div className='message-content'>Привет мир!</div>
        </div>
      </div>

      <div className='chat-form'>
        <input type='text' placeholder='Сообщение' className='chat-field' id='text-field' />
        <input type='submit' value='Отправить' className='chat-button' id='send-button' />
      </div>
    </div>
  );
}

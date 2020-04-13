import React from 'react';

export function ChatForm() {
  return (
    <div className='chat-form'>
      <input type='text' placeholder='Сообщение' className='chat-field' id='text-field' />
      <input type='submit' value='Отправить' className='chat-button' id='send-button' />
    </div>
  );
}

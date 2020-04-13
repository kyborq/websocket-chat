import React from 'react';

import { ChatForm } from '../components/ChatForm';
import { Chat } from '../components/Chat';

import '../styles/ChatPage.css';

export function ChatPage() {
  return (
    <div className='chat-page'>
      <h1 className='page-title'>Диалог</h1>

      <Chat />

      <ChatForm />
    </div>
  );
}

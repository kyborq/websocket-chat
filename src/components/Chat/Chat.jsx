import React from "react";

import "./Chat.css";

export function Chat() {
  return (
    <div className="chat">
      <ChatView>
        <ChatMessage
          author="u123456789"
          message="Hello world! edfla;wef asdfsdf erwfg asdfsdf were"
        />
        <ChatMessage
          author="u123456789"
          message="Hello world! edfla;wef asdfsdf erwfg asdfsdf were"
        />
        <ChatMessage
          author="u123456789"
          message="Hello world! edfla;wef asdfsdf erwfg asdfsdf were"
        />
        <ChatMessage
          author="u123456789"
          message="Hello world! edfla;wef asdfsdf erwfg asdfsdf were"
        />
        <ChatMessage
          author="u123456789"
          message="Hello world! edfla;wef asdfsdf erwfg asdfsdf were"
        />
        <ChatMessage
          author="u123456789"
          message="Hello world! edfla;wef asdfsdf erwfg asdfsdf were"
        />
        <ChatMessage
          author="u123456789"
          message="Hello world! edfla;wef asdfsdf erwfg asdfsdf were"
        />
        <ChatMessage
          author="u123456789"
          message="Hello world! edfla;wef asdfsdf erwfg asdfsdf were"
        />
        <ChatMessage
          author="u123456789"
          message="Hello world! edfla;wef asdfsdf erwfg asdfsdf were"
        />
        <ChatMessage
          author="u123456789"
          message="Hello world! edfla;wef asdfsdf erwfg asdfsdf were"
        />
      </ChatView>
      <ChatForm />
    </div>
  );
}

export function ChatView({ children }) {
  return <div className="chat-view">{children}</div>;
}

export function ChatForm() {
  return (
    <label className="chat-form">
      <input type="text" className="chat-field" />
    </label>
  );
}

export function ChatMessage({ author, message }) {
  return (
    <div className="chat-message">
      <span className="chat-message-author">{author}</span>
      <p className="chat-message-text">{message}</p>
    </div>
  );
}

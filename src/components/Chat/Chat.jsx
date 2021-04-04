import React, { useState } from "react";

import "./Chat.css";

export function Chat() {
  return (
    <div className="chat">
      <ChatView>
        <ChatMessage id="123456" author="username" message="Hello world!" />
      </ChatView>
      <ChatForm />
    </div>
  );
}

export function ChatView({ children }) {
  return <div className="chat-view">{children}</div>;
}

export function ChatForm() {
  const [author, setAuthor] = useState("user");
  const [message, setMessage] = useState("");

  return (
    <div className="chat-form">
      <input
        type="text"
        className="chat-field short-field"
        value={author}
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      />
      <input
        type="text"
        className="chat-field"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button className="chat-send-button">{">"}</button>
    </div>
  );
}

export function ChatMessage({ id, author, message }) {
  return (
    <div className="chat-message">
      <div className="message-info">
        <span className="chat-message-author">{author}</span>
        <span className="chat-message-id">{`~${id}`}</span>
      </div>
      <div className="chat-message-text">{message}</div>
    </div>
  );
}

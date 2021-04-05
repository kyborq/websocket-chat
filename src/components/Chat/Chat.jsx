import React, { useState } from "react";

import "./Chat.css";

export function Chat({ messages, onMessageSend }) {
  return (
    <div className="chat">
      <ChatView data={messages} />
      <ChatForm
        onSubmit={(message) => {
          onMessageSend && onMessageSend(message);
        }}
      />
    </div>
  );
}

export function ChatView({ data }) {
  return (
    <div className="chat-view">
      {data.map((message, i) => (
        <ChatMessage key={i} id={message.userid} author={message.username} message={message.message} client={message.clientid} />
      ))}
    </div>
  );
}

export function ChatForm({ onSubmit }) {
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
      <button
        className="chat-send-button"
        onClick={() => {
          onSubmit && onSubmit({ name: author, text: message });
        }}
      >
        {">"}
      </button>
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

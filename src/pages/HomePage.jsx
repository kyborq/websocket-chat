import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Page } from "../components/Page";
import { Logo } from "../components/Logo/Logo";
import { Chat } from "../components/Chat/Chat";

const ws = new WebSocket("ws://127.0.0.1:8081");

export function HomePage() {
  const [messages, setMessages] = useState([]);

  const { room } = useParams();

  useEffect(() => {
    getMessages();
  }, []);

  const sendMessage = (uname, text) => {
    ws.send(JSON.stringify({ name: uname, message: text }));
  };

  const getMessages = () => {
    ws.onmessage = function (message) {
      console.log(message.data);

      const data = JSON.parse(message.data);

      setMessages((msg) => [...msg, data]);
    };
  };

  return (
    <Page>
      <Logo text="chatter" room={room} />
      <Chat
        messages={messages}
        onMessageSend={(message) => {
          sendMessage(message.name, message.text);
        }}
      />
    </Page>
  );
}

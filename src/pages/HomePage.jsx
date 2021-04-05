import React from "react";
import { useParams } from "react-router-dom";

import { Page } from "../components/Page";
import { Logo } from "../components/Logo/Logo";
import { Chat } from "../components/Chat/Chat";

const MessagesMockup = [
  {
    userid: "12345",
    username: "Lex",
    message: "Hi",
    clientid: "22222",
  },
  {
    userid: "12345",
    username: "Lex",
    message: "How are you?",
    clientid: "22222",
  },
  {
    userid: "22222",
    username: "Konstantin",
    message: "Im fine and you?",
    clientid: "22222",
  },
];

export function HomePage() {
  let { room } = useParams();

  return (
    <Page>
      <Logo text="chatter" room={room} />
      <Chat
        messages={MessagesMockup}
        onMessageSend={(message) => {
          // ...
        }}
      />
    </Page>
  );
}

import React from "react";

import { Page } from "../components/Page";
import { Logo } from "../components/Logo/Logo";
import { Chat } from "../components/Chat/Chat";

export function HomePage() {
  return (
    <Page>
      <Logo text="chatter" />
      <Chat />
    </Page>
  );
}

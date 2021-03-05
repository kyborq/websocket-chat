import React from "react";

import { Page } from "../components/Page";
import { Header } from "../components/Header/Header";
import { Chat } from "../components/Chat/Chat";

export function HomePage() {
  return (
    <Page>
      <Header />
      <Chat />
    </Page>
  );
}

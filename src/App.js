import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ChatPage } from "./pages/ChatPage";
import { HomePage } from "./pages/HomePage";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/chat" component={ChatPage} />
      </Switch>
    </Router>
  );
}

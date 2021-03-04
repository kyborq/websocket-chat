import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ChatPage } from "./pages/ChatPage";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ChatPage} />
      </Switch>
    </Router>
  );
}

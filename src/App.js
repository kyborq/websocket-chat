import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/App.css';
import './styles/Mobile.css';

import { LoginPage } from './pages/LoginPage.js';
import { ChatPage } from './pages/ChatPage.js';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          <LoginPage />
        </Route>
        <Route path='/chat'>
          <ChatPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

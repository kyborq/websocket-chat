import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/App.css';
import './styles/Mobile.css';

import { LoginPage } from './pages/LoginPage';
import { ChatPage } from './pages/ChatPage';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/chat'>
          <ChatPage />
        </Route>
        <Route path='/'>
          <LoginPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

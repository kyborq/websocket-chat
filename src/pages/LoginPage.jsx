import React from 'react';

import { LoginForm } from '../components/LoginForm';

import '../styles/LoginPage.css';

export function LoginPage() {
  return (
    <div className='login-page'>
      <LoginForm />
    </div>
  );
}

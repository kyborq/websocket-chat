import React from 'react';

import '../styles/LoginPage.css';

export function LoginPage() {
  return (
    <div className='login-page'>
      <div className='login-form'>
        <h2 className='form-title'>Добро пожаловать!</h2>
        <p className='form-text'>Для входа в чат придумайте уникальное имя пользователя ;)</p>
        <input type='text' placeholder='john_smith' className='form-field' />
        <input type='submit' className='form-button' />
      </div>
    </div>
  );
}

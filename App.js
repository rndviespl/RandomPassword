import React, { useState } from 'react';
import './App.css';
const RandomPassword = () => {
  const [password, setPassword] = useState('пароль');

  const generatePassword = () => {
    const letters = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@';
    let newPassword = letters[Math.floor(Math.random() * letters.length)];
    for (let i = 0; i < 16; i++) {
      newPassword += letters[Math.floor(Math.random() * letters.length)];
    }
    setPassword(newPassword);
  };

  return (
    <div className="conteiner">
      <h1>генерация пароля</h1>
      <button className="button" id="buttonRandomPassword" 
      onClick={() => generatePassword()}>
        сгенерировать пароль
      </button>
      <div className="random-password" id="randomPassword">
        {password}
      </div>
    </div>
  );
};

export default RandomPassword;
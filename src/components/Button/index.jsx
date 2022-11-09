import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import style from './style.module.css';

function Button() {
  const { pathname } = useLocation();
  const text = pathname === '/login'
    ? ['Login', 'Ainda não possui uma conta?', 'register', 'Cadastre-se']
    : ['Cadastrar', 'Já possui uma conta?', 'login', 'Faça Login'];

  return (
    <div className={style.buttonArea}>
      <button type="submit" className={style.buttonElement}>
        {text[0]}
      </button>
      <p>
        {text[1]}
        {' '}
        <Link to={`../${text[2]}`} href="/">
          {text[3]}
        </Link>
      </p>
    </div>
  );
}

export default Button;

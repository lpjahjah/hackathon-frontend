import React from 'react';

import LoginForm from '../../components/LoginForm';
import style from './style.module.css';

const introText = (
  <section className={style.introText}>
    <h1>Evolua a sua carreira na tecnologia</h1>
    <p>Explore conhecimentos que estão transformando</p>
    <p>indústrias, negócios e vidas através de trilhas</p>
    <p>
      gratuitas em
      {' '}
      <strong>Desenvolvimento</strong>
      ,
      {' '}
      <strong>UX/UI Design</strong>
      {' '}
      e
      {' '}
      <strong>QA</strong>
      !
    </p>
  </section>
);

function Login() {
  return (
    <>
      <main className={style.mainSection}>
        {introText}
        <LoginForm />
      </main>
      <aside />
    </>
  );
}

export default Login;

import style from './style.module.css';

const LoginHeaderText = () => (
  <header className={style['login-header']}>
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
  </header>
);

export default LoginHeaderText;

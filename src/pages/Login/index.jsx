import LoginForm from '../../components/LoginForm';
import style from './style.module.css';
import foguete from '../../images/foguete.svg';

const introText = (
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

const Login = () => (
  <div className={style['page-structure']}>
    <main className={style['login-main']}>
      {introText}
      <LoginForm />
    </main>
    <aside className={style['login-side']}>
      <img src={foguete} alt="foguete" className={style['login-side__image']} />
    </aside>
  </div>
);

export default Login;

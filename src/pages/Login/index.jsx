import LoginForm from './LoginForm';
import LoginHeaderText from './LoginHeaderText';
import style from './style.module.css';
import foguete from '../../images/foguete.svg';

const Login = () => (
  <div className={style['page-structure']}>
    <main className={style['login-main']}>
      <LoginHeaderText />
      <LoginForm />
    </main>
    <aside className={style['login-side']}>
      <img src={foguete} alt="foguete" className={style['login-side__image']} />
    </aside>
  </div>
);

export default Login;

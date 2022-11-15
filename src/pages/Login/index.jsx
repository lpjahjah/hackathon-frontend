import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Form from '../../components/Form';
import LoginHeaderText from './LoginHeaderText';
import style from './style.module.css';
import foguete from '../../images/foguete.svg';
import usePathname from '../../utils/hooks/usePathname';

const Login = () => {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { pathname } = useLocation();

  useEffect(
    () => setRegisterData({ name: '', email: '', password: '' }),
    [pathname]
  );

  const [
    onSubmitAction,
    inputs,
    buttonText,
    redirectText,
    redirectPath,
    redirectLink,
  ] = usePathname(registerData);

  return (
    <div className={style['page-structure']}>
      <main className={style['login-main']}>
        <LoginHeaderText />
        <Form
          state={registerData}
          setState={setRegisterData}
          onSubmitAction={onSubmitAction}
          inputs={inputs}
          buttonText={buttonText}
        >
          <p>
            {`${redirectText} `}
            <Link to={`../${redirectPath}`} href="/">
              {redirectLink}
            </Link>
          </p>
        </Form>
      </main>
      <aside className={style['login-side']}>
        <img
          src={foguete}
          alt="foguete"
          className={style['login-side__image']}
        />
      </aside>
    </div>
  );
};

export default Login;

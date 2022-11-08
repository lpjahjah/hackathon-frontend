import {
  Link, useLocation,
} from 'react-router-dom';

const Button = () => {
  const { pathname } = useLocation();
  const text = pathname === '/login'
    ? ['Login', 'Ainda não possui uma conta?', 'register', 'Cadastre-se']
    : ['Cadastrar', 'Já possui uma conta?', 'login', 'Faça Login'];

  return (
    <>
      <button type="submit">{text[0]}</button>
      <p>
        {text[1]}
        {' '}
        <Link to={`../${text[2]}`} href="/">{text[3]}</Link>
      </p>
    </>
  );
};

export default Button;

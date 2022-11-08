import LoginForm from '../../components/LoginForm';

const introText = (
  <>
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
  </>
);

const Login = () => (
  <>
    <main>
      {introText}
      <LoginForm />
    </main>
    <aside />
  </>
);

export default Login;

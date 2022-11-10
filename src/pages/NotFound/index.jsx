import style from './style.module.css';

const NotFound = () => (
  <div className={style.pane}>
    <h1>Página não encontrada. </h1>
    <p>Verifique se o endereço foi digitado corretamente.</p>
  </div>
);

export default NotFound;

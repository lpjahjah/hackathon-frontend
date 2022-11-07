import { useNavigate } from 'react-router-dom';
import TrackCard from '../../components/TrackCard/TrackCard';
import style from './style.module.css';

const Home = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };
  return (
    <section>
      <section className={style.firstSection}>
        <div>
          <h1 className="title-b-l">
            Vamos embarcar juntos nessa jornada?
          </h1>
          <p className="label-r-m">
            Se você procura conteúdo tech de qualidade e gratuito, O Orange Evolution é
            {' '}
            <strong>para você</strong>
            ,
            pode chegar!
          </p>
        </div>
        <div>
          <button type="button" onClick={navigateToLogin}> Começar</button>
        </div>
      </section>
      <section>
        <h2>Escolha quantas trilhas quiser:</h2>
        <div className={style.cardsContainer}>
          <TrackCard title="Desenvolvedor Full Stack" />
          <TrackCard title="UX/UI Designer" />
          <TrackCard title="Quality Assurance(QA)" />
        </div>
      </section>
    </section>

  );
};

export default Home;

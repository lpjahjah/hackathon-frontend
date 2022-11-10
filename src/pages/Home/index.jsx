import TrackCard from '../../components/TrackCard';
import style from './style.module.css';
import TracksEnum from '../../enums/TracksEnum';
import devLogo from '../../images/settings.png';
import uxLogo from '../../images/graphic-design.png';
import qaLogo from '../../images/search.png';

const Home = () => (
  <div className="container">
    <div className="container--header--text">
      <div className={style.descriptionContainer}>
        <h1>
          Olá, seja bem vindo!
        </h1>
        <p>
          Nossas trilhas foram montadas pensando em quem está começando na área,
          ou passando por uma migração de carreira e ainda não sabe exatamente o
          que é esse mundo. Então, aperta o cinto e vem com a gente nessa jornada!
        </p>
      </div>
    </div>
    <section>
      <div className={style.cardsContainer}>
        <TrackCard title="Desenvolvedor Full Stack" track={TracksEnum.fullstack} image={devLogo} />
        <TrackCard title="UX/UI Designer" track={TracksEnum.uxui} image={uxLogo} />
        <TrackCard title="Quality Assurance(QA)" track={TracksEnum.qa} image={qaLogo} />
      </div>
    </section>
  </div>
);

export default Home;

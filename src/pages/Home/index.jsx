// import MenuIcon from '@mui/icons-material/Menu';
import { Menu } from '@mui/icons-material';
import TrackCard from '../../components/TrackCard';
import style from './style.module.css';

const Home = () => (
  <section>
    <section className={style.firstSection}>
      <Menu fontSize="large" />
      <div className={style.descriptionContainer}>
        <h1 className="title-b-l">
          Olá, seja bem vindo!
        </h1>
        <p className="label-r-sm">
          Nossas trilhas foram montadas pensando em quem está começando na área,
          ou passando por uma migração de carreira e ainda não sabe exatamente o
          que é esse mundo. Então, aperta o cinto e vem com a gente nessa jornada!
        </p>
      </div>
    </section>
    <section>
      <div className="teste" />
      <div className={style.cardsContainer}>
        <TrackCard title="Desenvolvedor Full Stack" trackPath="/developer" />
        <TrackCard title="UX/UI Designer" trackPath="/uxuidesigner" />
        <TrackCard title="Quality Assurance(QA)" trackPath="/qa" />
      </div>
    </section>
  </section>

);

export default Home;

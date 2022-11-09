import React from 'react';

import TrackCard from '../../components/TrackCard';
import style from './style.module.css';
import devLogo from '../../images/settings.png';
import uxLogo from '../../images/graphic-design.png';
import qaLogo from '../../images/search.png';

function Home() {
  return (
    <section className="background">
      <section className={style.firstSection}>
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
      </section>
      <section>
        <div className={style.cardsContainer}>
          <TrackCard title="Desenvolvedor Full Stack" trackPath="/developer" image={devLogo} />
          <TrackCard title="UX/UI Designer" trackPath="/uxuidesigner" image={uxLogo} />
          <TrackCard title="Quality Assurance(QA)" trackPath="/qa" image={qaLogo} />
        </div>
      </section>
    </section>
  );
}

export default Home;

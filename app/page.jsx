import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';

export default function Home() {
  return (
    <>
      <section className="hero">

        <div>

          <span className="tag">
            Portfólio profissional
          </span>

          <h1>
            Leticia Oliveira
          </h1>

          <h2>
            Desenvolvedora BackEnd
          </h2>

          <p>
            Desenvolvedora apaixonada por tecnologia,
            interfaces modernas e construção de
            aplicações web escaláveis.
          </p>

          <div className="actions">

            <Link
              href="/projetos"
              className="button primary"
            >
              Ver projetos
            </Link>

            <a
              href="/curriculo.pdf"
              download
              className="button secondary"
            >
              Currículo
            </a>

          </div>

        </div>

        <div className="heroCard">

          <img
            src="/pixel-art.png"
            alt="Imagem do portfólio"
            className="heroImage"
          />

        </div>

      </section>

      {/* SKILLS */}

      <section>

        <SectionTitle
          title="Principais habilidades"
        />

        <div className="skillsMarquee">

          <div className="skillsTrack">

            <div className="skillCard">
              <img src="/icons/java.png" alt="Java" />
            </div>

            <div className="skillCard">
              <img src="/icons/spring.png" alt="Spring Boot" />
            </div>

            <div className="skillCard">
              <img src="/icons/sql.png" alt="SQL" />
            </div>

            <div className="skillCard">
              <img src="/icons/api.png" alt="API" />
            </div>

            <div className="skillCard">
              <img src="/icons/angular.png" alt="Angular" />
            </div>

            <div className="skillCard">
              <img src="/icons/git.png" alt="Git" />
            </div>

            <div className="skillCard">
              <img src="/icons/github.png" alt="GitHub" />
            </div>

            {/* DUPLICADOS */}

            <div className="skillCard">
              <img src="/icons/java.png" alt="Java" />
            </div>

            <div className="skillCard">
              <img src="/icons/spring.png" alt="Spring Boot" />
            </div>

            <div className="skillCard">
              <img src="/icons/sql.png" alt="SQL" />
            </div>

            <div className="skillCard">
              <img src="/icons/api.png" alt="API" />
            </div>

            <div className="skillCard">
              <img src="/icons/angular.png" alt="Angular" />
            </div>

            <div className="skillCard">
              <img src="/icons/git.png" alt="Git" />
            </div>

            <div className="skillCard">
              <img src="/icons/github.png" alt="GitHub" />
            </div>

          </div>

        </div>

      </section>

    </>
  );
}
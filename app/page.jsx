import ProjectCard from '@/components/ProjectCard';
import SectionTitle from '@/components/SectionTitle';

async function getRepos() {
  try {
    const response = await fetch(
      'https://api.github.com/users/leticia-olivr/repos?sort=updated&per_page=100',
      {
        next: {
          revalidate: 3600
        }
      }
    );

    if (!response.ok) {
      return [];
    }

    return response.json();

  } catch {
    return [];
  }
}

export default async function Home() {

  const repos = await getRepos();

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
            Desenvolvedora Back-End apaixonada por tecnologia, arquitetura de sistemas e construção de aplicações web escaláveis, com foco em desempenho, APIs e soluções robustas.
          </p>

          <div className="actions">

            <a
              href="#projetos"
              className="button primary"
            >
              Ver projetos
            </a>

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

        <div className="skillsGrid">

          <div className="skillCard">
            <img
              src="/icons/java.png"
              alt="Java"
            />
          </div>

          <div className="skillCard">
            <img
              src="/icons/spring.png"
              alt="Spring Boot"
            />
          </div>

          <div className="skillCard">
            <img
              src="/icons/sql.png"
              alt="SQL"
            />
          </div>

          <div className="skillCard">
            <img
              src="/icons/api.svg"
              alt="API"
            />
          </div>

          <div className="skillCard">
            <img
              src="/icons/angular.svg"
              alt="Angular"
            />
          </div>

          <div className="skillCard">
            <img
              src="/icons/git.png"
              alt="Git"
            />
          </div>

          <div className="skillCard">
            <img
              src="/icons/github.svg"
              alt="GitHub"
            />
          </div>

        </div>

      </section>

      {/* PROJETOS */}

      <section
        id="projetos"
        className="projectsSection"
      >

        <SectionTitle
          title="Projetos"
        />

        <div className="projectsGrid">

          {repos.map((repo) => (

            <ProjectCard
              key={repo.id}
              project={repo}
            />

          ))}

        </div>

      </section>

    </>
  );
}
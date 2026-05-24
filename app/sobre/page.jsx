import SectionTitle from '@/components/SectionTitle';
import SkillBadge from '@/components/SkillBadge';

const tecnologias = [
  'Next.js', 
  'React', 
  'JavaScript', 
  'CSS', 
  'GitHub API', 
  'Componentização', 
  'Responsividade', 
  'Deploy na Vercel'
];

const skills = [
  'Resolução de problemas',
  'Lógica de programação',
  'Organização',
  'Aprendizado contínuo',
  'Trabalho em equipe',
  'Boas práticas de código'
];

export default function Sobre() {
  return (
    <section className="pageContainer">

      <SectionTitle
        title="Sobre mim"
      />

      <div className="aboutGrid">

        <div className="aboutCard">

          <h2>
            Quem sou eu
          </h2>

          <p>
            Olá! Me chamo Leticia Vitória e sou desenvolvedora Back-End em formação, com foco principal em Java e desenvolvimento de aplicações escaláveis e eficientes.
          </p>

          <p>
            Tenho interesse por arquitetura de sistemas, APIs e boas práticas de desenvolvimento. Gosto de aprender na prática, criar projetos reais e transformar ideias em soluções robustas, organizadas e funcionais.
          </p>

        </div>

        <div className="aboutCard">

          <h2>
            Meu objetivo
          </h2>

          <p>
            Meu objetivo é evoluir como desenvolvedora Back-End/Fullstack, criando aplicações seguras, performáticas e escaláveis, sempre focando em qualidade de código e experiência do usuário.
          </p>

          <p>
            Atualmente estudo Java, Spring Boot, banco de dados, APIs REST, Salesforce e conceitos modernos de desenvolvimento web.
          </p>

        </div>

      </div>

      <SectionTitle
        title="Tecnologias usadas neste portfólio"
      />

      <div className="skillsGrid">

        {tecnologias.map((tech) => (

          <SkillBadge
            key={tech}
            label={tech}
          />

        ))}

      </div>

      <SectionTitle
        title="Skills profissionais"
      />

      <div className="skillsGrid">

        {skills.map((skill) => (

          <SkillBadge
            key={skill}
            label={skill}
          />

        ))}

      </div>

    </section>
  );
}
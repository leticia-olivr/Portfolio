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
  'Criatividade',
  'Organização',
  'Comunicação',
  'Aprendizado contínuo',
  'Resolução de problemas',
  'Trabalho em equipe'
];

export default function Sobre() {
  return (
    <section className="pageContainer">

      <SectionTitle
        title="Sobre mim"
        subtitle="Um pouco sobre minha trajetória e meus objetivos"
      />

      <div className="aboutGrid">

        <div className="aboutCard">

          <h2>
            Quem sou eu
          </h2>

          <p>
            Olá! Me chamo Leticia Vitória e sou desenvolvedora em formação.
            Tenho interesse por tecnologia, design e criação de interfaces
            modernas, responsivas e intuitivas.
          </p>

          <p>
            Gosto de aprender na prática, criar projetos reais e transformar
            ideias em experiências digitais bonitas, organizadas e funcionais.
          </p>

        </div>

        <div className="aboutCard">

          <h2>
            Meu objetivo
          </h2>

          <p>
            Meu objetivo é evoluir como desenvolvedora frontend/fullstack,
            criando soluções com propósito, boa experiência para o usuário
            e código limpo.
          </p>

          <p>
            Atualmente estudo React, Next.js, JavaScript, Salesforce e boas
            práticas de desenvolvimento web.
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
import SectionTitle from '@/components/SectionTitle';

const experienciasProfissionais = [
  {
    empresa: 'Empresa Tech Fictícia',
    cargo: 'Desenvolvedora Frontend',
    periodo: '2026 - Atual',
    descricao:
      'Criação de interfaces modernas e responsivas utilizando React e Next.js, além de manutenção de componentes e melhorias na experiência do usuário.',
    tecnologias: [
      'React',
      'Next.js',
      'JavaScript',
      'CSS'
    ]
  },

  {
    empresa: 'Projeto Freelancer',
    cargo: 'Desenvolvedora Web',
    periodo: '2025',
    descricao:
      'Desenvolvimento de landing pages modernas, focando em design responsivo, performance e visual profissional.',
    tecnologias: [
      'HTML',
      'CSS',
      'JavaScript'
    ]
  },

  {
    empresa: 'Projetos Acadêmicos',
    cargo: 'Frontend Developer',
    periodo: '2024 - Atual',
    descricao:
      'Participação em projetos voltados para aplicações web, prototipação e experiências digitais utilizando tecnologias modernas.',
    tecnologias: [
      'React',
      'GitHub',
      'UI Design',
      'Salesforce'
    ]
  }
];

export default function ExperienciaProfissional() {
  return (
    <section className="pageContainer">

      <SectionTitle
        title="Experiência Profissional"
        subtitle="Projetos, experiências e atuação na área de tecnologia"
      />

      <div className="experienceGrid">

        {experienciasProfissionais.map((item) => (

          <article
            className="experienceCard"
            key={item.cargo}
          >

            <span>
              {item.periodo}
            </span>

            <h2>
              {item.cargo}
            </h2>

            <h3>
              {item.empresa}
            </h3>

            <p>
              {item.descricao}
            </p>

            <div className="techs">

              {item.tecnologias.map((tech) => (

                <div
                  className="techBadge"
                  key={tech}
                >
                  {tech}
                </div>

              ))}

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}
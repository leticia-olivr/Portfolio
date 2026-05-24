import SectionTitle from '@/components/SectionTitle';

const experiencias = [
  {
    year: '2024',
    title: 'Início da graduação',
    institution: 'Faculdade / Universidade',
    description:
      'Início da trajetória na área de tecnologia com foco em lógica, desenvolvimento web e fundamentos da programação.'
  },

  {
    year: '2025',
    title: 'Desenvolvimento Web',
    institution: 'React • Next.js • JavaScript',
    description:
      'Evolução em interfaces modernas, componentização, responsividade e construção de projetos práticos.'
  },

  {
    year: '2026',
    title: 'Salesforce Developer',
    institution: 'Formação Salesforce',
    description:
      'Aprendizado sobre desenvolvimento na plataforma Salesforce, componentes, automações e deploy.'
  }
];

export default function ExperienciaAcademica() {
  return (
    <section className="pageContainer">

      <SectionTitle
        title="Trajetória Acadêmica"
        subtitle="Minha evolução e aprendizado na área de tecnologia"
      />

      <div className="timeline">

        {experiencias.map((item, index) => (

          <div
            key={index}
            className="timelineItem"
          >

            <div className="timelineDot" />

            <div className="timelineCard">

              <span className="timelineYear">
                {item.year}
              </span>

              <h2>
                {item.title}
              </h2>

              <h3>
                {item.institution}
              </h3>

              <p>
                {item.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
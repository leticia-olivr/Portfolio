import SectionTitle from '@/components/SectionTitle';

const experienciasAcademicas = [
  {
    instituicao: 'Faculdade / Universidade',
    curso: 'Curso na área de Tecnologia',
    periodo: '2024 - Atual',
    descricao:
      'Formação com foco em desenvolvimento web, lógica de programação, banco de dados, projetos práticos e tecnologias modernas.'
  },
  {
    instituicao: 'Curso de Desenvolvimento Web',
    curso: 'HTML, CSS, JavaScript e React',
    periodo: '2025',
    descricao:
      'Estudos voltados para criação de interfaces responsivas, componentização, boas práticas e construção de projetos reais.'
  },
  {
    instituicao: 'Formação Salesforce',
    curso: 'Salesforce Developer',
    periodo: '2026',
    descricao:
      'Aprendizado sobre a plataforma Salesforce, componentes, organização de projetos, desenvolvimento e deploy.'
  }
];

export default function ExperienciaAcademica() {
  return (
    <section className="pageContainer">
      <SectionTitle
        title="Experiência Acadêmica"
        subtitle="Minha formação, cursos e estudos na área de tecnologia"
      />

      <div className="experienceGrid">
        {experienciasAcademicas.map((item) => (
          <article className="experienceCard" key={item.curso}>
            <span>{item.periodo}</span>
            <h2>{item.curso}</h2>
            <h3>{item.instituicao}</h3>
            <p>{item.descricao}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
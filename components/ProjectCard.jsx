export default function ProjectCard({ project }) {
  return (
    <article className="projectCard">
      <h2>{project.name}</h2>

      <p>
        {project.description || 'Projeto disponível no GitHub.'}
      </p>

      <span>
        Linguagem: {project.language || 'Não informada'}
      </span>

      <a
        href={project.html_url}
        target="_blank"
        className="button secondary"
      >
        Ver no GitHub
      </a>
    </article>
  );
}
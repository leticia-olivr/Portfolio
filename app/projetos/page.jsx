import ProjectCard from '@/components/ProjectCard';

async function getRepos() {
  try {
    const response = await fetch(
      'https://api.github.com/users/leticia-olivr/repos',
      {
        next: {
          revalidate: 3600
        }
      }
    );

    if (!response.ok) {
      throw new Error('Erro ao buscar projetos');
    }

    return response.json();
  } catch (error) {
    return [];
  }
}

export default async function Projetos() {
  const repos = await getRepos();

  return (
    <section className="pageContainer">
      <h1>Projetos Desenvolvidos</h1>

      <div className="projectsGrid">
        {repos.length > 0 ? (
          repos.map((repo) => (
            <ProjectCard
              key={repo.id}
              project={repo}
            />
          ))
        ) : (
          <p>
            Não foi possível carregar os projetos agora.
          </p>
        )}
      </div>
    </section>
  );
}
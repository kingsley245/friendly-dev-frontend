import type { Project } from '~/types';
import ProjectCard from './ProjectCard';
type FeaturedProjectProps = {
  projects: Project[];
  count: number;
};

const FeaturedProject = ({ projects, count = 4 }: FeaturedProjectProps) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-gray-200">
        ✨ Featured Project
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProject;

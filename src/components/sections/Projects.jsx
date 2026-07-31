import { projects } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';

/**
 * Featured projects showcase section.
 */
export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Featured Projects"
          subtitle="Some of my recent work and personal projects"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
